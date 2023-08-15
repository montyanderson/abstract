# abstract

Create commit messages with directory context.

> An abstract is a concise summary of a research paper or entire thesis.

> a "form components"

```
[master cd19de8] `ui/components/*`: form components
 3 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 ui/components/Button.vue
 create mode 100644 ui/components/Input.vue
 create mode 100644 ui/components/Select.vue
```

## install

```
git clone https://github.com/montyanderson/abstract ~/.abstract
```

If you're using Mac OS / ZSH:

```
echo "alias \"a=$HOME/.abstract/commit.sh\"" >> ~/.zshrc
```

If you're using Linux / Bash:

```
echo "alias \"a=$HOME/.abstract/commit.sh\"" >> ~/.bashrc
```
