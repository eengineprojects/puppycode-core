# puppycode-core
this is the code our website relies on (for iframes) but isnt the full source code of puppycode
# Contributing
If you are contributing a course, it must have the following:
* YouTube video for every concept (with example problems)
* Problems that have a tutorial
* Programming language must be ONLY one of the following: HTML/JS/CSS, Java, C++, C#, or Python
* Special "runtime" / Fake library (unless your course is about basic programming)
## Basic programming
### Examples that are considered basic programming
* Simple output
* Program that has input asked for directly (not from a file)
### Examples that aren't basic programming (a simple code runner api can't run this without a "fake library" provided in the editor)
* Program that has or opens GUI
* Program that reads a file
* Program that detects a key press
## "fake library"
Functions like `Console.ReadKey()`, for example, the "runtime" (element like textarea) can have an onkeypress event
