# manhattan-project
A Tangram map for exporting a deduped Manhattan tileset.

#### The gist

1. Grab all the .json tiles at z16 for Manhattan using [landgrab](https://github.com/tangrams/landgrab):

    `python landgrab.py 3954665 16`

2. Dedupe the tiles, creating another .json set:

    `python dedupe.py`

3. Set the deduped tileset as a datasource for this Tangram map, in `styles.yaml`
4. Start a web server in this directory and load `index.html`
5. When the page loads, `batch-convert.js` will export a zip containing the vbos from Tangram
6. Expand the zip, and convert the vbos using [vbo-export](https://github.com/tangrams/vbo-export):

    `python vbo_to_ply.py vbos/`

The converted .ply files will be placed in the same directory, and should be loadable in a 3D app, ready for viewing/converting/printing.
