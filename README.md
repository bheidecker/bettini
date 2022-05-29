# Maintenance guidelines

## Adding pages and changing nav links

Use the `_data/nav.yml` file to set the order of the nav links. 
By updating that file, you are also declaring the keys of the nav items.
These keys must:
- correspond to an HTML file in the root folder. For example, declaring the key `research` in `_data/nav.yml` will create a nav link to `/research.html` page.
- correspond to the value of the `key` key in the page's "front matter" (the YAML section at the top between two `---` symbols).
- translated in `_i18n/<lang>.yml` files under the `navigation` key to provide the language-specific text.

## Adding images to the homepage carousel

First, add the images under `/assets/images/carousel` folder. 
Preferably use `.jpg` files under 100KB in size. 
To reduce size of images, use Mac's Preview application:
- To resize an image: Tools > Adjust Size...
- To crop an image: drag a crop area, then select Tools > Crop
- To export JPG with reduced quality: File > Export..., choose JPEG format and change the quality slider

Then, reference the image in the `carousel` key in the `_i18n/<lang>.yml` files, mimicking the format of existing entries.

The alt-text of carousel images is taken from the first line under the image's `text` key in `_i18n/<lang>.yml`. 
Do not break the line too early.

## Changing images outside the homepage carousel

These images are hardcoded in HTML files. These can only be changed through code.
The alt-text of those images can be updated in the `images_alt_text` key in `_i18n/<lang>.yml`.

## Changing headlines 

Most headlines can be changed in the `_i18n/<lang>.yml` files.
Some headlines are set using the markdown tags `#` (denoting H1) or `##` (denoting H2) inside `.md` files. 
These `.md` files can be found under `_i18n/<lang>/<folder>`. 
For example, the patient info headline can be found under `_i18n/<lang>/diagnoses/intro.md`.

## Changing paragraphs

Paragraphs containing text blurbs are found in `.md` files under `_i18n/<lang>/<folder>`.
However, texts that appear in lists are found under the `collections` folder.
To add items to lists, create an `.md` file under `collections/<list folder>/<lang>`.
These files are sorted lexicographically, therefore it is recommended to prefix files using a two-digit number.
Note that `.md` files often have a YAML section at the top called "front matter" between two `---` symbols.
It's important to use the right YAML keys in the front matter, as described below.

There are currently 3 supported lists:
- Clinical specialties that appear on the homepage, under `collections/_specialties`. Expected front-matter key: `heading`.
- Patient information about tests and diagnoses, under `collections/_diagnoses`. Expected front-matter key: `heading`.
- Testimonials, under `collections/_testimonials`. Expected front-matter key: `name`.

## Adding links in `.md` files

You can add a link inside an `.md` file using the following format:
```
[anchor text](link URL)
```

To add a link that opens a new tab:
```
[anchor text](link URL){:target="_blank"}
```

To avoid mistakes in copying link URLs in different languages, you could add the URL under a YAML key in 
`_data/links.yml`, and then refer to it using `{{ site.links.<key> }}` inside the rounded brackets.

For example, if you add the following into `_data/links.yml`:
```yaml
my_category:
  my_link: https://example.com
```

you can add a reference to the link inside an `.md` file like so:
```
[anchor text]({{ site.links.my_category.my_link }}){:target="_blank"}
```

# Technical notes

The build pipeline in development is executed with `bin/dev`, which starts the services defined in `Procfile.dev`:
- Tailwind (`css`):
  - Per `package.json`, the source file in `/docs/assets/stylesheets` is transpiled to `/docs/_site/assets/stylesheets`
  - Per `tailwind.config.js`, the transpiler monitors classes in HTML files residing in the `/docs` folder
  - Per `_config.yml`, Jekyll ignores `/docs/assets/stylesheets` and keeps `/docs/_site/assets/stylesheets` from being deleted 
- esbuild (`js`):
  - Per `package.json`, esbuild transpiles `/docs/assets/javascripts/app.js` to `/docs/_site/assets/javascripts`
  - Per `_config.yml`, Jekyll ignores `/docs/assets/javascripts` and keeps `/docs/_site/assets/javascripts` from being deleted
- Jekyll (`site`):
  - Per `_config.yml`, Jekyll builds all HTML files from `/docs` to `/docs/_site/` 
  - Per `package.json`, the development build overwrites the `baseurl` in `_config.yml` to an empty string

The production build is performed by the workflow defined in `.github/workflows/build.yml`.
It executes `bin/build` to build the site, and publishes the results to the `gh-pages` branch - 
the branch Github Pages uses to serve the site.
