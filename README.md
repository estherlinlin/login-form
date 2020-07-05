## Login Page
This project was bootstrapped with Create React App.

Github page: https://estherlinlin.github.io/login-form/
CodeSandBox: https://codesandbox.io/s/github/estherlinlin/login-form)

### 驗證密碼說明
密碼的任意連續 6 碼，不可以和帳號的任意連續 6 碼重複。

username: abc12345
password: xxabc123wer
結果：不通過

username: abc12345
password: c12345er12fda
結果：不通過

username: abc12345
password: c124345ksfh
結果：通過

### Build Setup
```
# install dependencies
npm install

# build for production 
npm run build

```