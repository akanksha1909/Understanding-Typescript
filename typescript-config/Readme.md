- To compile the file whenever some changes occurs - 
    ```js
    tsc app.ts --watch
            or
    tsc app.ts --watch
    ```
- Watch mode is great when we have single file to work on.
- However when we have multiple typescipt files, we need to do following things - 
    - Run `tsc --init`
    - It will create `tsconfig.json` file 
    - Run `tsc` 
    - It will compile all the typescript files in that folder
    - To watch all the typescript files, run `tsc -w`
- `tsconfig.json` tells typescript how it should compile the files.
    
    - exclude: ['node_modules'] 
        - Any file present in this will not be compiled by typescript. 
        - Normally user keep `node_modules` in this option.
        - Typescript by default exculudes node_modules while compiling. So we need to explicitly exclude it.
    - include: []
        - It only compiles the file present in include.
        - If files are present in both include and exclude, files will be compiled include - exclude.
    - files: [] 
        - It is same as "include", however you can only include files and not the folders. 