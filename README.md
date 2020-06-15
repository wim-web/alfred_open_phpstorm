# Open PhpStorm Project From Alfred

## Requirements

![deno_version](https://img.shields.io/badge/Deno-%3E%3D1.0.*-lightgrey)

[Install Deno](https://deno.land/)

## Install and Setup

### Install

Releasesタブをクリックし、Alfred Workflow ファイルをダウンロードしてください

### Setup

ダウンロードしたファイルを選択するとインポート画面が開きますので、importボタンをクリックしてインポートしてください

このワークフローは読み込むディレクトリを設定ファイルに設定しますので、任意の場所に任意の名前のjsonファイルを作成してください

[見本](https://github.com/wim-web/alfred_open_phpstorm/blob/master/setting.json) のように読み込みたいディレクトリを `setting > paths`  に配列で指定してください

そのあと、AlfredのWorkflowsの画面を開き、さきほどインポートしたワークフローを選択し、 `Configure workflow and variables` に設定ファイルへのパスを追加します

![configure_button](https://github.com/wim-web/alfred_open_phpstorm/blob/image/image/configure_workflow_and_variables.png)
![add_variables](https://github.com/wim-web/alfred_open_phpstorm/blob/image/image/add_variables.png)

- Name: 'setting_path'
- Value: 設定ファイルへのパス

### Add a path to PATH

`deno` コマンドと `phpstorm` コマンドのパスはあらかじめ通しておいてください

## How to use

デフォルトのキーワードは `ps` になっています

どの検索も部分一致になっています

- プロジェクト名で検索

`ps project_param`


- ディレクトリ名で検索

`ps :directory_param`

- ディレクトリ + プロジェクト名で検索

`ps :directory_param:project_param`

## Notice

このワークフローは設定したディレクトリ以下にあるディレクトリを抽出するだけでPhpStormのプロジェクトを判別しているわけではないので、
指定するディレクトリは極力PhpStormだけを置いているディレクトリにしたほうがよいとおもいます








