const { argv } = require('process');
const  path  = require('path');
const { spawn} = require('child_process');

const glob = require('glob');
const fs = require('fs');
const fsExtra = require('fs-extra');

const handlebars = require('handlebars');

const varCase = str => str.replace(/-[a-z]/g, m => m[1].toUpperCase()).replace(/^.{1}/, m => m.toUpperCase());
const lowCase = str => str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`).replace(/^-/, '');

(async () => {
    const component = process.argv[2];

    const dirName = lowCase(component);
    const componentName = varCase(component);

    // console.log(path.join(process.cwd(),'src', process.argv[2]));

    const dirPath = path.join(process.cwd(),`src/${dirName}`);
    // windows系统下通过cmd创建文件
    try {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log('Directory created successfully!');
    } catch (err) {
        console.error('Error creating directory:', err);
    }

    let pattern = path.join(process.cwd(), 'scripts', 'template', '*.hbs');
    pattern = pattern.replace(/\\/g, '/');
    const tplFiles = glob.sync(pattern);


    tplFiles.forEach((async filePath => {
        const content = await fsExtra.readFile(filePath,'utf-8');
        const template = handlebars.compile(content);
        const result = template({
            dirName,
            componentName
        });


        const newPath = filePath.replace(`scripts/template`,`src/${dirName}`)
            .replace('component',dirName)
            // .replace('Component',componentName)
            .replace('.hbs','');
        // await fs.write(newPath,result);
        //  适用于异步写入文件，并且接受文件路径和内容作为参数

            console.log('newPath1111111111:', newPath);
                await fsExtra.outputFile(newPath, result);
        console.log(`write ${newPath} success`);
        }
    ))
    // linux通过spawn创建文件
    // spawn('mkdir',['-p', path.join(process.cwd(),'src/' + process.argv[2])]);
})();
