## 记录

1. 遇到的一个问题`yarn serve`后，报错如下

```
 ERROR  Failed to compile with 1 error                              下午12:05:20

Syntax Error: Error: Debug Failure. Output generation failed


You may use special comments to disable some warnings.
Use // eslint-disable-next-line to ignore the next line.
Use /* eslint-disable */ to ignore all warnings in a file.
Issues checking in progress...
No issues found.
```

[error](./pics/1.png)
通过注释路由的方法,找到错误的地方

```
// src/components/songsheet/SongSheetHeader.vue

import { Creator } from "../../api/data.d";

props: {
    bgImg: String,
    playCount: {
      type: Number,
      required: true,
    },
    iconImg: String,
    title: {
      type: String as PropType<string>,
    },
    creator: Creator,
  },

<!-- Creator 定义如下： -->
export class Creator {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
}

<!-- 修改后 -->
creator: Object as PropType<Creator>,

```
