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
    - target: "es5" 
        - Tell the compiler to compile the code to which Javascript target.
    - lib: [] 
        - If lib is commented out, lib assumes all DOM APIs are available, plus all features mentioned in target.
        - These defaults you need to run the code in the browser.  
    - sourceMap: "true" 
        - With sourceMap true, it generate `ts` files under "source" in the browser, which simplifies debugging.
    - outDir: Tell the typescript compliler where to generate the output files.
    - rootDir: Tell the compiler where to look for source code.
    - noEmitOnError: If set to "true", will not generate javascript file containing errors.
    - noUnusedLocals: If set to "true", it will complain if any unused variable is there.

- Next-generation Javascript
    - const and let are next generation javascript and are scoped to block. 
    - arrow functions are next generation javascript

- If any variable/method is declared as private, it can't be changed outside the class, even inside the inherited class.
- If we want to use the variable inside extended class but not make it available outside the classes, use "protected"
- "Static" method can be called without initializing the class.
- You can only access the static variables inside static methods.
- "Static" properties and methods are detached from instances. You can't access them using "this".
- "Abstract" method should be just defined in base class and defintion of it should be present in "inherited class"