### git reset HEAD~1
### git reset --mixed HEAD~1
### git reset --soft HEAD~1
### git reflog

```
a123456 HEAD@{0}: reset: moving to HEAD~1
b789012 HEAD@{1}: commit: Added login test
c345678 HEAD@{2}: commit: Added homepage test
```

### git revert HEAD

```
Commit A: Create login page

Commit B: Add login functionality

Commit C: Add login validation
```
// when am working in wrong bransh
- git reset
- git add .
- git stash
-- open new bransh
- git stash pop
### git stash
### git stash pop.
```
1. Restores your previously saved changes.
2. Applies them to your working directory.
3. Removes the stash entry if the application succeeds without conflicts.
```