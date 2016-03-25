'use strict';
const chalk = require('chalk');

function sout(title,tabbed){
  let that        = this;
  this.title      = title;
  this.tabbed     = tabbed;
  this.tabbedHead = tabbedHead();
  this.tabbedLog  = tabbedLog();
  this.timers     = {};
  /*^ this*/
    this.log        = function(message,status){
      console.log(that.tabbedHead+head('title',status), message);
    };
    this.timerStart = function(key){
      let timeStart = new Date().getTime();
      that.timers[key] = timeStart; // pushed the timer to memory
    }
    this.timerEnd   = function(key){
      let timeStart = that.timers[key];
      return new Date().getTime() - timeStart+'ms';
    }
    this.bracket    = function(message,status,tab){
      console.log(tabbedLog(tab)+head('bracket',status), message);
    }
  /*> head - Compile the head of the message*/
    function head(type,status){
      let headTypes   = headStatuses();
      let isString    = typeof status;
      let headMatch   = false;
      if(isString == "string" && status !== " " && status !== undefined){
        for (var fn in headTypes[type]) {
          if(fn == status){
            headMatch = true;
            return headTypes[type][fn]();
          }
        }
        if(headMatch == false){
          return headTypes[type].default();
        }
      }
      else{
        return headTypes[type].default();
      }
    }
    function headStatuses(){
      return {
        title: {
          default: function(){
            return chalk.white('['+that.title+'] ');
          },
          red: function(){
            return chalk.red('['+that.title+'] ');
          },
          green: function(){
            return chalk.green('['+that.title+'] ');
          },
          blue: function(){
            return chalk.blue('['+that.title+'] ');
          },
          yellow: function(){
            return chalk.yellow('['+that.title+'] ');
          }
        },
        bracket: {
          default: function(){
            return chalk.white('> ');
          },
          red: function(){
            return chalk.red('> ');
          },
          green: function(){
            return chalk.green('> ');
          },
          blue: function(){
            return chalk.blue('> ');
          },
          yellow: function(){
            return chalk.yellow('> ');
          }
        }
      }
    }
  /*> tabbed*/
    function tabbedHead(){
      let tabbed = that.tabbed;
      let isInteger = typeof tabbed;
      if(isInteger == 'number'){
        let tabs = '';
        for (var i = 0; i < that.tabbed; i++) {
          tabs = tabs + '  ';
        }
        return tabs;
      }
      else{
        return '';// cant do nothing so dont do nothing!
      }
    }
    function tabbedLog(tab){
      let isInteger = typeof tab;
      if(isInteger == 'number'){
        let tabs = that.tabbedLog;
        for (var i = 0; i < tab; i++) {
          tabs = tabs + '  ';
        }
        return tabs;
      }
      else{
        return that.tabbedHead+'  ';
      }
    }
}

module.exports = sout;
