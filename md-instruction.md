# Markdown Instructions
Since I just started managing github io pages on my own, I found that most of posts on io pages was written with markdown syntax.  
I guess I have to know markdown syntax in order to read or write posts and also hopefully it would be helpful somehow oneday.  
Markdown syntax is pretty similar with HTML but Markdown is much easier and simpler. 


## 1. Header
```
<Syntax in detail>

# h1
## h2
### h3
#### h4
##### h5
###### h6
```
<br>
<br>

## 2. Emphasis
| Syntax | Preview |
|---|:---:|
| `__bold__` | __bold__ |
| `**bold**` | **bold** |
| `_italic_` | _italic_ |
| `*italic*` | *italic* |
| `*italic*` | *italic* |
| `~~Strikethrough~~` | ~~Strikethrough~~ |
| `<U>underline</U>` | <U>underline</U> |
| `<u>underline</u>` | <u>underline</u> |
  
* **Underline** has many different ways to show in Markdown. However, it seems it doesn't work on github platform.(I have to test them for io pages later.)
<br>
<br>

## 3. Quotes
```
<Syntax in detail>

> quote1
>> quote2
>>> quote3
```

> quote1
>> quote2
>>> quote3
<br>
<br>

## 4. Table
**' : '** : text-alignment  
**' - '** : At least 3

```
<Syntax in detail>

| Left | Center | Right | Default |
|:---|:---:|---:|---|
| LEFT | Center | right | blank?| blank? Check Below!|
| Text-align | Text-align | Text-align | |
```


| Left | Center | Right | Default |
|:---|:---:|---:|---|
| LEFT | Center | right | blank? Check Below!|
| Text-align | Text-align | Text-align | |
<br>
<br>


## 5. List
```
<Syntax in detail>
1. first
2. second
3. third

* first
  - second
    + third


```

1. first  
2. second  
3. third  

* first
  - second
    + third
<br>
<br>


# 6. Link
```
[Google](http://www.google.com "Here is hover message")
Google www.google.com; /*without bracket*/
Google <www.google.com>; /*with bracket*/

[1. Headers 헤더](#1-headers-헤더)
[2. Emphasis 강조](#2-emphasis-강조)
[3. Blockquotes 인용](#3-blockquotes-인용)

```

[Google](http://www.google.com "Here is hover message")  
Google www.google.com;  
Google <www.google.com>;  
My mail <jinkyukim.dev@gmail.com>

[1. Headers](#1-headers)
[4. Table](##-4-table)
[6. Link](##-6-link)










유형1(`설명어`를 클릭하면 URL로 이동) : [TheoryDB 블로그](https://theorydb.github.io "마우스를 올려놓으면 말풍선이 나옵니다.")  
유형2(URL 보여주고 `자동연결`) : <https://theorydb.github.io>  
유형3(동일 파일 내 `문단 이동`) : [동일파일 내 문단 이동](#markdown의-반드시-알아야-하는-문법)  
