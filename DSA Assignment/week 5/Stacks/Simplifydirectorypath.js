function simplifyPath(path) {
    const directories = path.split('/').filter(dir => dir !== '');

    const stack = [];
    for (const dir of directories) {
        if (dir === '.') {

        } else if (dir === '..') {

            if (stack.length > 0) {
                stack.pop();
            }
        } else {
    
            stack.push(dir);
        }
    }

    return '/' + stack.join('/');
}
const inputPath = prompt("Enter the absolute path:")
const simplifiedPath = simplifyPath(inputPath);
console.log(simplifiedPath);
