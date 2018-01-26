ReactJS - 交大課程搜尋!!!
===
### Example
http://people.cs.nctu.edu.tw/~chaohs1031/

## 開設專案
- 開新專案 `npx create-react-app nctu_course`
- `cd nctu_course`
- `npm start`
- 可以在 http://localhost:3000 看到初始頁面

## 設定 Router
- 安裝套件 `npm install react-router-dom --save`
- 設定URL
	```jsx=
    <BrowserRouter>

        {/* page routes */}
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search' component={PageSearch} />

            {/* 404 not found */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
	```

## 引用 Bootstrap
- `npm install react-bootstrap --save`
- 引入css到 public/index.html: 
	```html=
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
	```
- 開發文件: https://react-bootstrap.github.io/layout/grid/
- Grid System: https://getbootstrap.com/docs/3.3/css/

## 引用 CSS
- 創建 mystyle.css
- 在要引用的js檔 `import './XXX/mystyle.css'`

## 後端API
#### 開發文件: 
- [課程搜尋API](https://hackmd.io/BwUwDAzALGCsEFpYHYYKgJjCBBDCAbAIwIBGuRmlkEuAJkA=)

#### API測試
```javascript=
fetch("http://hschao.nctu.me/courses/search_api?search=游逸平")
	.then(response => response.json())
	.then(json => console.log(json))
```

## 接入資料
- 參考: https://ithelp.ithome.com.tw/articles/10187243
![](https://i.imgur.com/0k9Rqpq.png)


## 靜態網頁部署
- `npm run build`
- build/* 放入server根目錄
#### 如果不在網域根目錄
- 設定server root:
  package.json加入: `"homepage" : "http://people.cs.nctu.edu.tw/~XXXX/"`
- 修改Router Path:
  ```
  path={`${process.env.PUBLIC_URL}/search`}
  ```
