const filesys = require('fs')

// lets see the methods inside it
// console.log(filesys)

var myfile = `<table>
    <tr>
        <td>First cell</td>
        <td>Second block</td>
    <tr>
    <tr>
        <td>First cell</td>
        <td>Second block</td>
    <tr>
    <tr>
        <td>First cell</td>
        <td>Second block</td>
    <tr>
    <tr>
        <td>First cell</td>
        <td>Second block</td>
    <tr>
</table>
`;

// using the writeFile method to create a file
// txt, html, csv, xml, etc
// name of file, content of file, callback function
// filesys.writeFile('sopulu.html', myfile, (error) => {
//     if(error){
//         console.log(error)
//     } else {
//         console.log('File created');
//         // name of file, encoding type, callback function
//         filesys.readFile('sopulu.html','utf8', (err, file) => {
//             if(err){
//                 console.log(err)
//             } else {
//                 console.log(file)
//             }
//         })
//     }
// });

// original name, new name, callback function
// filesys.rename('sopulu.html', 'omalicha.html', (err) => {
//     if(err){
//         console.log(err)
//     } else{
//         console.log('File renamed')
//     }
// });

// file name, data to append/add, callback function
// filesys.appendFile('sopulu.html', `<tr><td>Append</td><td>anon</td></tr>`, (err) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log('File edited')
//     }
// });

filesys.unlink('omalicha.html', (err) => {
    if(err){
        console.log(err)
    } else {
        console.log('File deleted')
    }
});