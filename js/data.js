var input = document.getElementById("excel-file");
var GDP=[], inf=[], outf=[];

input.onchange = function(e){
    var files = e.target.files;
    var reader = new FileReader();
    reader.onload = function(ev) {
        try {
            var data = ev.target.result,
                workbook = XLSX.read(data, {
                    type: 'binary'
                }); // 以二进制流方式读取得到整份excel表格对象
        } catch (e) {
            console.log('文件类型不正确');
            return;
        }
        GDP = GDP.concat(XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"]));
        inf = inf.concat(XLSX.utils.sheet_to_json(workbook.Sheets["Sheet2"]));
        outf = outf.concat(XLSX.utils.sheet_to_json(workbook.Sheets["Sheet3"]));

        // console.log(GDP);
        // console.log(inf);
        // console.log(outf);
        initialPie();
    };
    reader.readAsBinaryString(files[0]);
};

