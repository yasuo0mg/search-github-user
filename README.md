## SGU -Input form for searching github users-

<img width="1437" alt="スクリーンショット 2020-12-19 9 13 21" src="https://user-images.githubusercontent.com/48271813/102674784-7f56c100-41da-11eb-9247-43887f7f81a4.png">

### description

You can find github users by entering some texts. Then, you will have an user name and user icon.
Only <a href="https://github.com/askif/sgu/blob/main/src/hooks/useFetchUsers.ts#L23">partially matched</a> data between the search keyword and the username are displayed.

### library versions

- next v10.0.7
- react v17.0.1
- react-dom v17.0.1
- typescript v4.2.3
- react-hook-form v6.15.4
- @chakra-ui/react v1.3.3
- @emotion/styled v11.1.5
- eslint v7.21.0
- prettier v2.2.1

### Design Systems

- Atomic Design

### setup

```
$ npm install
```

and start server.

```
$ npm run dev
```
