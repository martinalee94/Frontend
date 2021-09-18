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



## 6. Link
```
<Syntax in detail>

[Google](http://www.google.com "Here is hover message")
Google www.google.com; /*without bracket*/
Google <www.google.com>; /*with bracket*/

[1. Header](#-1-header)
[4. Table](#-4-table)


```


Google www.google.com;  
Google <www.google.com>;  
[Google](http://www.google.com "Here is hover message")  

[Document top](#-markdown-instructions)
<br>
<br>


## 7. Code
```
<Syntax in detail>

/* without '|' in the beginning */
|  ```
|  print(hello)
|  ```

| ~~~python    /*Describe which language*/
| print(hello)
| ~~~
```

```
print(hello)
```

```python
print(hello)
for x in range(0,10):
  print(x)
```
<br>
<br>



## 8. CheckBox
```
<Syntax in detail>

- [x] check 'x' /* space[x]space   Space before and after must!*/
- [ ] check 'O'
-[] without space bar. what happen?

```

- [x] check 'x'
- [ ] check 'O'  
-[] without space bar. what happen?
<br>
<br>


## 9. Emoji
Check out millions kinds of emoji on this website.  
__Emoji__:point_right: www.emoji-cheat-sheet.com

```
<Syntax in detail>

:sweat_drops:
:family:
:sunny:
```
:sweat_drops:
:family:
:sunny:
<br>
<br>

## 10. Image
```
<Syntax in detail>

/* Html */
<img src="https://images.unsplash.com/photo-1631861721222-560d535b84c4?ixid=
MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" width="300" height="200"> 
```
<img src="https://images.unsplash.com/photo-1631861721222-560d535b84c4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" width="300" height="200"> 
