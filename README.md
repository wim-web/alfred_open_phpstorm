# Open PhpStorm Project From Alfred

[日本語README](README_ja.md)

## Requirements

![deno_version](https://img.shields.io/badge/Deno-%3E%3D1.0.*-lightgrey)

[Install Deno](https://deno.land/)

## Install and Setup

### Install

Click on the Releases tab, download the Alfred Workflow file.

### Setup

Select the downloaded file and the import screen will open, click the import button to import.

This workflow uses configure file, so create a json file with an arbitrary name in an arbitrary location.

Specify the directory wanted to load in `setting > paths` as an array [example](https://github.com/wim-web/alfred_open_phpstorm/blob/master/setting.json) 

After that, open up the Workflows screen in Alfred and select you just imported workflow, Add the path to the configuration file in `Configure workflow and variables`

![configure_button](https://github.com/wim-web/alfred_open_phpstorm/blob/image/image/configure_workflow_and_variables.png)
![add_variables](https://github.com/wim-web/alfred_open_phpstorm/blob/image/image/add_variables.png)

- Name: 'setting_path'
- Value: path to configure file

### Add a path to PATH

previously add a `deno` and `phpstorm` path to PATH.

## How to use

default keyword is `ps` .

Every search is a partial match.

- Search by project name

`ps project_param`


- Search by directory name

`ps :directory_param`

- Search by directory and project name

`ps :directory_param:project_param`

## Notice

Since this workflow only extracts directories under the specified directory and does not identify PhpStorm's projects, the
I think it's better to specify the directory where only the PhpStorm is located as much as possible.








