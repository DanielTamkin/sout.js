'use strict';
const chalk = require('chalk');
function sout(title,tabbed){
  this.tab        = '   ';
  /*^ that*/
  let that        = this;
  that.title      = title;
  that.tabbed     = tabbedHead(tabbed);
  /*^ this*/
    this.log        = function(message,color){
      console.log(soutlog('log',message,color));
    };
    this.bracket    = function(message,color,tab){
      console.log(soutlog('bracket',message,color,tab));
    };
  /*> sout - builds the whole message*/
  function soutlog(type,data,color,tab){
    if(type == 'log'){
      return that.tabbed+headColors(headLog(),color)+data;
    }
    else{
      return tabbedLog(tab)+headColors(headBracket(),color)+data;
    }
  }
  /*> head - Compile the head of the message*/
    function headLog(){
      return '['+that.title+'] ';
    }
    function headBracket(){
      return '> ';
    }
    function headColors(data,color){
      if(color !== undefined){
        for (var fn in chalk.styles) {
          if(color.toLowerCase() == fn.toLowerCase()){
            return chalk[fn](data);
            break;
          }
        }
        // if all else fails
        return chalk.white(data);
      }
      else{
        return chalk.white(data);
      }
    }
  /*> tabbed*/
    function tabbedHead(tabbed){
      if(typeof tabbed == 'number'){
        let tabs = '';
        for (var i = 0; i < tabbed; i++) {
          tabs = tabs + that.tab;
        }
        return tabs;
      }
      else{
        return '';// cant do nothing so dont do nothing!
      }
    }
    function tabbedLog(tabMultiplier){
      if(tabMultiplier !== undefined
        && typeof tabMultiplier == 'number'
        && tabMultiplier >= 0){
        let tabs = that.tabbed;
        if(tabMultiplier == 1){
          tabs = that.tab + that.tab;
        }
        else{
          for (var i = 0; i < tabMultiplier; i++) {
            tabs += that.tab;
            console.log(tabs+'|');
          }
        }
        return tabs;
      }
      else{
        return that.tabbed+that.tab;
      }
    }
}

module.exports = sout;
