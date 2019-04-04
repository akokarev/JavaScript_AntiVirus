//======AntiVirus=======
function AXLog(obj,func,params){
  var str = 'ActiveXObject '+obj.fileName+'['+func+'](';
  params.forEach(
    function(item, i, arr) {
      if (typeof(item) != "undefined") {
        if (i>0) {str+=','}
        str+= item
      }
    }
  );
  str+=')';
  Logger.log(str);
  return str;
}

function cFields(parent) {
  this.fileName = parent.fileName+'.fields';
  this.append = function(a,b,c,d,e,f,g){return AXLog(this,'append',[a,b,c,d,e,f,g])};
}

function ActiveXObject(file_name,a,b,c,d,e,f,g) {
  this.fileName = file_name;
  AXLog(this,'=NEW=',[a,b,c,d,e,f,g]);
  this.Status = 200;
  this.fields = new cFields(this);
  this.ResponseBody = file_name+'["ResponseBody"]';
  this.Size = file_name+'["Size"]';
  
  this.open = function(a,b,c,d,e,f,g){return AXLog(this,'open',[a,b,c,d,e,f,g])};
  this.send = function(a,b,c,d,e,f,g){return AXLog(this,'send',[a,b,c,d,e,f,g])};
  this.GetSpecialFolder = function(a,b,c,d,e,f,g){AXLog(this,'GetSpecialFolder',[a,b,c,d,e,f,g]); return 'SpecialFolder'};
  this.GetTempName = this.open = function(a,b,c,d,e,f,g){AXLog(this,'GetTempName',[a,b,c,d,e,f,g]); return 'TempName'};
  this.Open = function(a,b,c,d,e,f,g){return AXLog(this,'Open',[a,b,c,d,e,f,g])};
  this.Write = function(a,b,c,d,e,f,g){return AXLog(this,'Write',[a,b,c,d,e,f,g])};
  this.Read = function(a,b,c,d,e,f,g){return AXLog(this,'Read',[a,b,c,d,e,f,g])};
  this.addNew = function(a,b,c,d,e,f,g){return AXLog(this,'addNew',[a,b,c,d,e,f,g])};
  this.appendChunk = function(a,b,c,d,e,f,g){return AXLog(this,'appendChunk',[a,b,c,d,e,f,g])};
  this.SaveToFile = function(a,b,c,d,e,f,g){return AXLog(this,'SaveToFile',[a,b,c,d,e,f,g])};
  this.Close = function(a,b,c,d,e,f,g){return AXLog(this,'Close',[a,b,c,d,e,f,g])};
  this.run = function(a,b,c,d,e,f,g){return AXLog(this,'run',[a,b,c,d,e,f,g])};
  this.deleteFile = function(a,b,c,d,e,f,g){return AXLog(this,'deleteFile',[a,b,c,d,e,f,g])};
}

var WScript = {
  ScriptFullName: 'WScript.ScriptFullName',
}
