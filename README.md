# Project schema

```json5
{
      "id": "sample-project", //unique project id, used for reference
      "path": "/projekti/kumuluzee-rest-client", // path for project page
      "publicRepo": true, // whether to display repo link or not
      "repoUrl": "https://github.com/me/sample-project", // url to repo
      "version": "1.0.1", // latest version of project
      "lastUpdate": "2019-02-16T15:34:42.990Z", // last update of project in ISO format
      "deployment": {
        // link
        "type": "link",
        "url": "https://www.sample-project.com",
        // download
        "type": "file",
        "url": "runtime.exe" // file located in /static/projects/<project_id>/runtime.exe
      },
      "translations": {
        "<language_key>": {
          "name": "Sample project",
          "shortDescription": "short description",
          "description": "looooooooong description"
        },
      }
    }
```
