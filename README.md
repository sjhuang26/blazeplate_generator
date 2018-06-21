# blazeplate_generator
Codebase generators that power [blazeplate.io](http://blazeplate.io).


## System Requirements
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)


## Contributing

If you're interested in developing blazeplate please consult the following instructions to get started.


#### Local Development Setup

The following instructions will guide you through the process of getting your local computer set up to make contributions to the `blazeplate_generator` codebase.

1. Fork this repository (`blazeplate/blazeplate_generator`) so you have your own copy hosted on GitHub at `github.com/your-username/blazeplate_generator`.

2. Clone your fork of the repository down to your local machine and navigate into the resulting directory. Use `Clone with SSH` fron the `Clone or download` dropdown on GitHub with the following terminal command:

```
git clone git@github.com:your-username/blazeplate_generator.git
cd blazeplate_generator
```

3. In the `blazeplate_generator` directory, use the following command to add the `upstream` remote to the repository:

```
git remote add upstream git@github.com:rcos/observatory-server.git
```

You can ensure this worked correctly by running `git remote show`. You should see entries for both `origin` and `upstream`.

The `upstream` remote will allow you to pull the latest changes from `blazeplate/blazeplate_generator` so you're always editing up-to-date code.

4. Install [npm](https://www.npmjs.com/) dependencies:

```
npm install
```

5. Test your installation

```
npm test
```

This command will generate a full-stack example application in the `blazeplate_generator/build` directory. If this command completes without an error, your local setup of blazeplate is working.


#### Submitting Changes

The following instructions will guide you through the process of merging your local changes into the upstream `blazeplate/blazeplate_generator` repository.

1. Push your changes to the `dev` branch on your fork of the repository:

```
git push origin dev
```

2. Open a [new pull-request](https://github.com/blazeplate/blazeplate_generator/compare) into the `dev` branch of `blazeplate/blazeplate_generator` from the `dev` branch of your fork (i.e. `your-username/blazeplate_generator`).

3. Your pull request will be reviewed.


## Built With

- [ejs](http://ejs.co/)

- [fs-extra](https://github.com/jprichardson/node-fs-extra)

- [lodash](lodash.com/docs/4.17.4)

- [underscore.string](http://gabceb.github.io/underscore.string.site/)