class DataCode {
    constructor(targetElem){
        this._skill_base_list = [90,85,80,75,70,60,50,48,45,40,35,30,25,20,15,10,5,1];
        this._en_base = [];
        this._data_code_length = 0;
        this._debug = false;
        var _targets = [];
        var _version = 0;
        for(var i=0; i<10; i++){
            this._en_base.push(i.toString());
        }
        for(var i=0; i<26; i++){
            this._en_base.push(String.fromCharCode(65 + i));
        }
        for(var i=0; i<26; i++){
            this._en_base.push(String.fromCharCode(97 + i));
        }
        this._en_base.push('-');
        this._en_base.push('_');
        $(targetElem).each(function(){
            if($(this).attr("id") == "version") {
                _version = $(this).attr("value");
            } else {
                _targets.push(this);
            }
        });
        this._version = _version;
        this._targets = _targets;
    }
    get encodeBase(){
        return this._en_base;
    }
    get encodeBaseString(){
        return "[A-Za-z0-9_-]*";
    }
    get version(){
        return this._version;
    }
    get debug_mode(){
        return this._debug;
    }
    set_debug_mode(debug) {
        this._debug = debug;
    }
    _encode(val){
        var i = parseInt(val);
        if(!i){
            return "";
        }
        var l = this._en_base.length;
        var x = parseInt(i / l);
        if(x == 0){
            return this._en_base[i];
        } else {
            var y = i % l;
            return this._encode(x) + this._en_base[y];
        }
    }
    _decode(val){
        var i = this._en_base.indexOf(val.slice(-1));
        var x = val.slice(0, -1);
        if(x.length == 0){
            return i;
        } else {
            return i + this._decode(x) * this._en_base.length;
        }
    }
    checkDataCode(data_code){
        var ck_base_str = "^" + this.encodeBaseString + "$";
        var ck_base = new RegExp(ck_base_str);
        return (data_code.length == this._data_code_length) && ck_base.test(data_code);
    }
    generateDataCode(){
        var rs = this._encode($("#version").attr("value"));
        for (var j = 0;j<this._targets.length;j++){
            var e = this._targets[j];
            var l = parseInt($(e).attr("data-code-length"));
            if(l <= 0) {
                l = 1;
            }
            var en_code = "";
            for (var i =0;i<l;i++){
                en_code += "0";
            }
            var get_val = "";
            if(e.hasAttribute("value")){
                get_val = $(e).attr("value");
            } else {
                get_val = $(e).val();
            }
            en_code += this._encode(get_val);
            en_code = en_code.substring(en_code.length - l , en_code.length);
            if(this._debug){ console.log("gen-val", get_val, l, en_code); }
            rs += en_code;
        }
        if(this._data_code_length == 0){
            this._data_code_length = rs.length;
        }
        if(this._debug){ console.log("gen-rs", rs.length, rs); }
        return rs;
    }
    parseDataCode(data_code, index=0){
        if(index==0 && (this._data_code_length == 0 || !this.checkDataCode(data_code))){
            console.log("parseError",index,  data_code);
            return -1;
        } else if (index >= this._targets.length){
            return 0;
        }
        if(index == 0){
            var v = this._decode(data_code.substring(0, 1));
            if(v != this.version){
                console.error("DataCode Version error: " + v);
                return -1;
            } else {
                console.log("DataCode Version: " + v);
                data_code = data_code.substring(1, data_code.length);
            }
        }
        var e = this._targets[index];
        var l = parseInt($(e).attr("data-code-length"));
        if(l <= 0) {
            l = 1;
        }
        var get_code = data_code.substring(0, l);
        var get_value = this._decode(get_code);
        if(e.hasAttribute("value")){
            $(e).attr("value", get_value.toString());
            var get_name = $(e).attr("id");
            console.log("Assign ID", get_name, get_code, get_value);
        } else {
            $(e).val(get_value);
            var get_name = $(e).parent().find("span").text();
            console.log("Assign Value", get_name, get_code, get_value);
        }
        index++;
        var rs = this.parseDataCode(data_code.substring(l, data_code.length), index);
        if(rs == -1){
            return -1;
        } else {
            return 0;
        }
    }
    parseSkillCode(skill_code){
        if(!skill_code || skill_code.length - 2 != this._skill_base_list.length){
            console.error("skill_code format error: ", skill_code.length, skill_code);
            return [];
        }
        var parse_code = this._parseSkillCode(skill_code.slice(2));
        if(this._debug){console.log("parse_code", parse_code);}        
        return this._generalSkillList(parse_code);
    }
    compareSkillCode(target_skill_code, src_skill_code){
        if(!target_skill_code || !src_skill_code || target_skill_code.length != src_skill_code.length || target_skill_code.length - 2 != this._skill_base_list.length){
            console.error("skill_code format error: ", target_skill_code.length, target_skill_code,src_skill_code.length, src_skill_code);
            return [];
        }
        var target_data = target_skill_code.slice(2).split("");
        var src_data = src_skill_code.slice(2).split("");
        var compare_code = '';
        for(var i=0; i<target_data.length; i++){
            compare_code += (parseInt(src_data[i], 16) - parseInt(target_data[i], 16)).toString(16);
        }        
        console.log("compare_code", compare_code);
        var parse_code = this._parseSkillCode(compare_code);
        if(this._debug){console.log("parse_code", parse_code);}
        return this._generalSkillList(parse_code);
    }
    _generalSkillList(parse_code){
        var rs = [];
        var data_list = parse_code.split(",");
        var skill_base_end = this._skill_base_list.slice(-1)[0].toString();
        data_list.forEach(function(d){
            if(! /^.*\+(-)?[0-9]{1,2}$/.test(d)){
                return
            }
            var rs_dict = {start: "", end: "", lv: ""};
            var get_lv = d.split("+")[1];
            var get_target = d.split("+")[0];
            var start = get_target.split("~")[0];
            if(start == ""){
                rs_dict.start = skill_base_end;
            } else {
                rs_dict.start = start;
            }
            rs_dict.end = get_target.split("~")[1];
            rs_dict.lv = parseInt(get_lv);
            rs.push(rs_dict);
        });
        return rs;
    }
    _parseSkillCode(skill_code, index=0, lv=0){
        if(!skill_code || index > this._skill_base_list.length){
            return "";
        }        
        var offset = 1;
        var get_code = skill_code.slice(0, 1);
        if(get_code == "-"){
            get_code += skill_code.slice(1, 2);
            offset += 1;
        }
        var get_skill_lv = parseInt(get_code, 16);        
        if (get_skill_lv && get_skill_lv != lv){                        
            var rs = "~"+this._skill_base_list[index] + "+" + get_skill_lv;
            if (index > 0){
                rs = rs + "," + this._skill_base_list[index - 1];
            } 
            index++;
            return this._parseSkillCode(skill_code.slice(offset), index, get_skill_lv)+ rs;
        } else if (get_skill_lv == 0 && get_skill_lv != lv){            
            var rs = "," + this._skill_base_list[index - 1];            
            index++;
            return this._parseSkillCode(skill_code.slice(offset), index, get_skill_lv) + rs;
        } else {            
            index++;
            return this._parseSkillCode(skill_code.slice(offset), index, lv);
        }
    }
}
