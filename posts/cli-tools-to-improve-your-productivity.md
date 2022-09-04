---
title: "CLI tools to improve your productivity"
date: "2022-03-19"
authorName: "not_afraid"
authorLink: "https://not-afraid.medium.com/"
source: "https://not-afraid.medium.com/cli-tools-to-improve-your-productivity-e985afc2bd57"
sourceName: "Medium"
image: "./images/cli-tools-to-improve-your-productivity-1.png"
---

I love exploring cli tools that saves my time on cli and more importantly prints the stuff with syntax highlightling or good visualizations. Here are a bunch of which i use:

1. **dust**

> Dust gives an instant overview of disk space used by directories.([Github](https://github.com/bootandy/dust))

![dust screenshot](./images/cli-tools-to-improve-your-productivity-1.png)

2. **duf**

> Shows Disk Usage/Free Utility in a nice table format. ([Github](https://github.com/muesli/duf))

![duf screenshot](./images/cli-tools-to-improve-your-productivity-2.png)

3. **bat**

> It’s a clone of `cat` with syntax highlighting support for a ton of languages.([Github](https://github.com/sharkdp/bat))

This tool is a must have.

4. **bpytop**

> A replacement of top command with better visualisation for resource monitoring. ([Github](https://github.com/aristocratos/bpytop))

![bpytop screenshot](./images/cli-tools-to-improve-your-productivity-4.png)

5. **fx**

> A command line tool to view pretty json, has support for interactive json viewing also.([Github](https://github.com/antonmedv/fx))

6. **jq**

> A command-line JSON processor with pretty print.

There are a lot of amazing things this tool can do for parsing data from json, give it a try. Basics can be learnt from [https://stedolan.github.io/jq/](https://stedolan.github.io/jq/). If you work with json, then this tool is very handy and a must.

7. **yq**

> A lightweight and portable command-line YAML processor. This is somewhat equivalent of `jq`, but for YAML.

If you often work with Kubernetes, helm charts etc then this tool is very handy to print prettily or parse the yaml files. It can convert json to yaml and print it with syntax highlighting.([Github](https://github.com/mikefarah/yq))

8. **tldr**

This is my personal favourite tool. I use it quite a lot from time to time.

> It displays simple help pages for command-line tools, from the tldr-pages project([https://tldr.sh](https://tldr.sh)).

Linux man pages can be overwhelming to see summary or quick usage for a tool(yeah they are good if you are looking for more detailed explanation), so this tool gives a quick summary and usage commands, flag, args etc for a cli tools with nice syntax highlighting.

![tldr screenshot](./images/cli-tools-to-improve-your-productivity-8.png)

9. **most**

**most** is a pager (As the name implies, a pager is a piece of software that helps the user get the output one page at a time, by getting the size of rows of the terminal and displaying that many lines).

I spend a lot of my time on my terminal. I often need to look man pages of various cli tools like grep, curl to see particular flags to fulfill my usecase. So I use **most**, as it shows the man pages, page by page with nice syntax highlighting. It has key bindings to quickly scroll up, down, left, right per page.

If you want your default pager to be **most**, in your bashrc or zshrc you can do export `export PAGER=”most”`.

```bash
man grep | most
```

![most screenshot](./images/cli-tools-to-improve-your-productivity-9.png)

10. **lsof**

> Lists open files and the corresponding processes.

I use this when I need to close a process running on a particular port.

```bash
lsof -i :8080
kill -2 <pid>
```