# Map675_Mod-02_Task-02
Map675 Module-02 Task-02, Mapping with Node.

>e.sambo@KADICT004 MINGW64 /c/NewMapPlus/Map675/Map675_Mod-02_Task-02 (master)
_$ git status_

On branch master
Your branch is up to date with 'origin/master'.
nothing to commit, working tree clean

>e.sambo@KADICT004 MINGW64 /c/NewMapPlus/Map675/Map675_Mod-02_Task-02 (master)
_$ git log_
commit 6a2f175273175d7c83a8f5c89cb8db8e07bc34e4 (HEAD -> master, origin/master, origin/HEAD)
Author: Etienne <efsa223@uky.edu>
Date:   Sat Nov 2 09:25:19 2019 -0400

    Initial commit

>e.sambo@KADICT004 MINGW64 /c/NewMapPlus/Map675/Map675_Mod-02_Task-02 (master)
_$ git remote -v_
origin  https://github.com/EFSA223/Map675_Mod-02_Task-02.git (fetch)
origin  https://github.com/EFSA223/Map675_Mod-02_Task-02.git (push)

>e.sambo@KADICT004 MINGW64 /c/NewMapPlus/Map675/Map675_Mod-02_Task-02 (master)
_$ pwd_
/c/NewMapPlus/Map675/Map675_Mod-02_Task-02

>e.sambo@KADICT004 MINGW64 /c/NewMapPlus/Map675/Map675_Mod-02_Task-02 (master)
_$ node -v_
v12.13.0

>e.sambo@KADICT004 MINGW64 /c/NewMapPlus/Map675/Map675_Mod-02_Task-02 (master)
_$ npm -v_
6.12.0

e.sambo@KADICT004 MINGW64 /c/NewMapPlus/Map675/Map675_Mod-02_Task-02 (master)
_$ npm init_
>This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.
See `npm help json` for definitive documentation on these fields
and exactly what they do.
Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.
Press ^C at any time to quit.
package name: (map675_mod-02_task-02)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository: (https://github.com/EFSA223/Map675_Mod-02_Task-02.git)
keywords:
author: Etienne Sambo, EFSA223
license: (ISC)
About to write to C:\NewMapPlus\Map675\Map675_Mod-02_Task-02\package.json:

>{
  "name": "map675_mod-02_task-02",
  "version": "1.0.0",
  "description": "Map675 Module-02 Task-02, Mapping with Node.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/EFSA223/Map675_Mod-02_Task-02.git"
  },
  "author": "Etienne Sambo, EFSA223",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/EFSA223/Map675_Mod-02_Task-02/issues"
  },
  "homepage": "https://github.com/EFSA223/Map675_Mod-02_Task-02#readme"
}
Is this OK? (yes)

>e.sambo@KADICT004 MINGW64 /c/NewMapPlus/Map675/Map675_Mod-02_Task-02 (master)
$

_$ git status_
>On branch master
Your branch is up to date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        package.json
no changes added to commit (use "git add" and/or "git commit -a")

_$ git add ._
>warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory
$ git status
On branch master
Your branch is up to date with 'origin/master'.
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   README.md
        new file:   package.json

>e.sambo@KADICT004 MINGW64 /c/NewMapPlus/Map675/Map675_Mod-02_Task-02 (master)
_$ git commit -m "Install npm project"_
[master df2bd5a] Install npm project
 2 files changed, 102 insertions(+)
 create mode 100644 package.json
