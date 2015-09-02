
// batch_export.js
// batch tile export from Tangram -
// prepares tiles for conversion by vbo-export
//
// TODO:
// take in a selection of tiles from landgrab and pass files/data directly to vbo-export
//

window.exportVBO = function (callback) {

console.log("Beginning VBO export");

var mytiles = [
{'x': 9650.0, 'y': 12317.0, 'z': 15},
 {'x': 9651.0, 'y': 12316.0, 'z': 15},
 {'x': 9648.0, 'y': 12318, 'z': 15},
 {'x': 9647.0, 'y': 12317.0, 'z': 15},
 {'x': 9650.0, 'y': 12319.0, 'z': 15},
 {'x': 9651.0, 'y': 12314.0, 'z': 15},
 {'x': 9649.0, 'y': 12315, 'z': 15},
 {'x': 9654.0, 'y': 12305.0, 'z': 15},
 {'x': 9654.0, 'y': 12311.0, 'z': 15},
 {'x': 9654.0, 'y': 12304.0, 'z': 15},
 {'x': 9651.0, 'y': 12313, 'z': 15},
 {'x': 9647.0, 'y': 12316.0, 'z': 15},
 {'x': 9648, 'y': 12317.0, 'z': 15},
 {'x': 9650.0, 'y': 12320.0, 'z': 15},
 {'x': 9649.0, 'y': 12318, 'z': 15},
 {'x': 9653.0, 'y': 12313.0, 'z': 15},
 {'x': 9653.0, 'y': 12305.0, 'z': 15},
 {'x': 9652.0, 'y': 12308, 'z': 15},
 {'x': 9649, 'y': 12317.0, 'z': 15},
 {'x': 9648.0, 'y': 12314.0, 'z': 15},
 {'x': 9650.0, 'y': 12312, 'z': 15},
 {'x': 9651.0, 'y': 12307.0, 'z': 15},
 {'x': 9652.0, 'y': 12313.0, 'z': 15},
 {'x': 9654.0, 'y': 12303.0, 'z': 15},
 {'x': 9654.0, 'y': 12300.0, 'z': 15},
 {'x': 9649.0, 'y': 12316, 'z': 15},
 {'x': 9648.0, 'y': 12315, 'z': 15},
 {'x': 9647.0, 'y': 12315.0, 'z': 15},
 {'x': 9654.0, 'y': 12307.0, 'z': 15},
 {'x': 9647, 'y': 12320.0, 'z': 15},
 {'x': 9648.0, 'y': 12312.0, 'z': 15},
 {'x': 9649.0, 'y': 12320.0, 'z': 15},
 {'x': 9648.0, 'y': 12313.0, 'z': 15},
 {'x': 9650.0, 'y': 12314, 'z': 15},
 {'x': 9656.0, 'y': 12301.0, 'z': 15},
 {'x': 9652, 'y': 12311.0, 'z': 15},
 {'x': 9654.0, 'y': 12310.0, 'z': 15},
 {'x': 9647.0, 'y': 12314.0, 'z': 15},
 {'x': 9650.0, 'y': 12316.0, 'z': 15},
 {'x': 9652.0, 'y': 12309, 'z': 15},
 {'x': 9650.0, 'y': 12310.0, 'z': 15},
 {'x': 9646.0, 'y': 12321.0, 'z': 15},
 {'x': 9648.0, 'y': 12321.0, 'z': 15},
 {'x': 9652.0, 'y': 12312, 'z': 15},
 {'x': 9653.0, 'y': 12306, 'z': 15},
 {'x': 9655.0, 'y': 12301, 'z': 15},
 {'x': 9651, 'y': 12309.0, 'z': 15},
 {'x': 9650.0, 'y': 12313, 'z': 15},
 {'x': 9653, 'y': 12309.0, 'z': 15},
 {'x': 9651.0, 'y': 12315.0, 'z': 15},
 {'x': 9646.0, 'y': 12319.0, 'z': 15},
 {'x': 9647.0, 'y': 12319.0, 'z': 15},
 {'x': 9653.0, 'y': 12311.0, 'z': 15},
 {'x': 9653.0, 'y': 12303.0, 'z': 15},
 {'x': 9650.0, 'y': 12309.0, 'z': 15},
 {'x': 9652.0, 'y': 12314.0, 'z': 15},
 {'x': 9654.0, 'y': 12306.0, 'z': 15},
 {'x': 9654.0, 'y': 12309.0, 'z': 15},
 {'x': 9650.0, 'y': 12311, 'z': 15},
 {'x': 9648, 'y': 12316.0, 'z': 15},
 {'x': 9649.0, 'y': 12312.0, 'z': 15},
 {'x': 9654.0, 'y': 12308.0, 'z': 15},
 {'x': 9656.0, 'y': 12302.0, 'z': 15},
 {'x': 9653.0, 'y': 12302.0, 'z': 15},
 {'x': 9647.0, 'y': 12318.0, 'z': 15},
 {'x': 9655.0, 'y': 12302.0, 'z': 15},
 {'x': 9655.0, 'y': 12300.0, 'z': 15},
 {'x': 9648, 'y': 12319.0, 'z': 15},
 {'x': 9652.0, 'y': 12307.0, 'z': 15},
 {'x': 9651.0, 'y': 12308.0, 'z': 15},
 {'x': 9653, 'y': 12307.0, 'z': 15},
 {'x': 9649, 'y': 12314.0, 'z': 15},
 {'x': 9650.0, 'y': 12315, 'z': 15},
 {'x': 9654.0, 'y': 12301.0, 'z': 15},
 {'x': 9649.0, 'y': 12313, 'z': 15},
 {'x': 9652.0, 'y': 12306.0, 'z': 15},
 {'x': 9649.0, 'y': 12311.0, 'z': 15},
 {'x': 9655.0, 'y': 12303.0, 'z': 15},
 {'x': 9653.0, 'y': 12304.0, 'z': 15},
 {'x': 9651, 'y': 12311.0, 'z': 15},
 {'x': 9646.0, 'y': 12320.0, 'z': 15},
 {'x': 9648.0, 'y': 12320.0, 'z': 15},
 {'x': 9656.0, 'y': 12300.0, 'z': 15},
 {'x': 9650.0, 'y': 12318.0, 'z': 15},
 {'x': 9653, 'y': 12310.0, 'z': 15},
 {'x': 9653.0, 'y': 12312.0, 'z': 15},
 {'x': 9650.0, 'y': 12308.0, 'z': 15},
 {'x': 9649.0, 'y': 12310.0, 'z': 15},
 {'x': 9651.0, 'y': 12312, 'z': 15},
 {'x': 9649, 'y': 12319.0, 'z': 15},
 {'x': 9651.0, 'y': 12310, 'z': 15},
 {'x': 9654.0, 'y': 12302.0, 'z': 15},
 {'x': 9652.0, 'y': 12310, 'z': 15},
 {'x': 9653, 'y': 12308.0, 'z': 15},
 {'x': 9652.0, 'y': 12305.0, 'z': 15},
 {'x': 9647.0, 'y': 12321.0, 'z': 15},
];

var num = mytiles.length;
console.log("Loading", num, "tiles");

// find tile range, for offset calculation
min = {x: Infinity, y: Infinity};
max = {x:-Infinity, y: -Infinity};
for (t in mytiles) {
  mt = mytiles[t];

  min.x = Math.min(min.x, mt.x);
  min.y = Math.min(min.y, mt.y);
  max.x = Math.max(max.x, mt.x);
  max.y = Math.max(max.y, mt.y);
}

// prepare a list of vbos
vbos = [];
vbosProcessed = 0;

function waitForVerts(callback, coords, offset, name) {
  var coords = coords;
  var name = name;
  setTimeout(function () {
    // todo: determine which of these are necessary
    // also todo: trigger this based on a loadCoordinates callback instead
    if (typeof scene.tile_manager.tiles[coords] != "undefined") {
      if ( scene.tile_manager.tiles[coords].loaded != false) {
        if ( Object.keys(scene.tile_manager.tiles[coords].meshes).length != 0) {
          // if (typeof scene.tile_manager.tiles[coords].meshes.polygons != "undefined" || typeof scene.tile_manager.tiles[coords].meshes.lines != "undefined") {
          //   if (typeof scene.tile_manager.tiles[coords].meshes.polygons.vertex_data != "undefined" || typeof scene.tile_manager.tiles[coords].meshes.lines.vertex_data != "undefined") {
          //       callback(coords, offset, name);
          //       return;
          //   }
          // }
          callback(coords, offset, name);
          return;

        } else {
          // no verts in this tile to convert
          console.log('no verts in', coords);
          callback(coords, offset, name);
          return;
        }
      }
    }
    // if not ready, wait a sec and try again
    waitForVerts(callback, coords, offset, name);
  }, 1000);
}

function waitForWorkers(callback) {
  setTimeout(function () {
    // check for workers
    if (typeof scene.workers != "undefined") {
      // check that the workers are registered in the scene
      if (typeof scene.workers[scene.next_worker] != "undefined") {
        // check that the scene is instantiated and ready to go
        if (typeof scene.center_meters != "undefined") {
          callback();
          return;
        }
      }
    }
    // if not ready, wait a sec and try again
    waitForWorkers(callback);
  }, 1000);
}

function waitForScene(callback) {
  setTimeout(function () {
    if (scene.initialized) {
        callback();
        return;
    }
    // if not ready, wait a sec and try again
    waitForScene(callback);
  }, 250);
}

function waitForVBOs(callback) {
  setTimeout(function () {
    if (vbosProcessed == mytiles.length) {
        callback();
        return;
    }
    // if not ready, wait a sec and try again
    waitForVBOs(callback);
  }, 1000);
}

function loadTiles() {
  for (t in mytiles) {
    // console.log("loading", mytiles[t]);
    scene.tile_manager.loadCoordinate(mytiles[t]);
  }
  console.log("%d tiles loaded", mytiles.length);
}

function tile_to_meters(zoom) {
    return 40075016.68557849 / Math.pow(2, zoom)
}

function processTiles() {
  for (t in mytiles) {
    mt = mytiles[t];
    if (Object.keys(scene.config.sources).length > 1) {
      console.error("This scene has data from multiple sources:", Object.keys(scene.config.sources), "Only scenes with a single source are supported for export.");
      return false;
    }
    source = Object.keys(scene.config.sources)
    coords = source+"/"+mt.z+"/"+mt.x+"/"+mt.y+"/"+mt.z;
    name = mt.x+"-"+mt.y+"-"+mt.z;

    // calculate offset relative to the extents of the tile batch -
    // the top-left tile is 0,0 - one tile over is 1,0 - one tile down is 0,1
    // this will lay the tiles out in space correctly relative to each other
    var offset = {x: mt.x - min.x, y: mt.y - min.y};
    // multiply the offset by the local tile coordinate range for vertex position offset
    offset.x *= 4096;
    offset.y *= 4096;

    // wait for tile to load, then process it
    waitForVerts(processVerts, coords, offset, name);
  }
}

// todo: get zoom from mytiles or scene
zoom = 15;
maximum_range = 4096; // tile-space coordinate maximum
conversion_factor = tile_to_meters(zoom) / maximum_range;

function processVerts(coords, offset, name) {
  console.log("Processing tile", vbosProcessed + 1, "of", mytiles.length, "-", (((vbosProcessed + 1)/mytiles.length)*100).toFixed(2), "%");

  meshes = scene.tile_manager.tiles[coords].meshes;
  allverts = "";
  for (m in meshes) {
    mesh = meshes[m];
    if (typeof(mesh) != "undefined") { // check for empty tiles
      verts = [];
      vbo = new Int16Array(mesh.vertex_data.buffer);
      var stride = mesh.vertex_layout.stride / Int16Array.BYTES_PER_ELEMENT;
      var count = mesh.vertex_count;

      // use count instead of vbo.length - the vbo is size before population, and resized in chunks as needed, and might have old tile data in it from the last tile the worker worked on
      for (var i=0; i < count; i++) {
        // for every [stride] elements, copy the first three elements x, y, and z, adding the offset to the x and y to lay all the tiles out in the same world space - use the conversion factor so the z is to the same scale as the x & y
        verts[i] = [(vbo[i*stride] += offset.x) * conversion_factor, (vbo[i*stride+1] -= offset.y) * conversion_factor, vbo[i*stride+2]];
      }

      // convert each entry into a string
      for (var i=0; i < verts.length; i++) {
          verts[i] = verts[i].join(' ');
      }
      // make it one long string
      verts = verts.join('\n');

      // add mesh verts to master tile verts list
      allverts = allverts + "\n" + verts;
    }
  }
  if (allverts.length > 0) {
    // add it to file list for zipping
    vbos.push({name: name, verts: allverts});
  }
  // } else {
  //   console.log('empty tile, skipping', coords);
  // }
  vbosProcessed++;
}

// zip with zip.js
function zipBlobs() {
  filenames = [];
  zip.workerScriptsPath = "/lib/";

  if (vbos.length == 0) { console.log("No files to zip!\nDone!"); return; }
  console.log('zipping %d files...', vbos.length);
  zip.createWriter(new zip.BlobWriter("application/zip"), function(writer) {
    console.log("Creating zip...");
    var f = 0;
    function nextFile(f) {
      fblob = new Blob([vbos[f].verts], { type: "text/plain" });
      // check for existing filename
      filename = vbos[f].name+".vbo";
      if (filenames.indexOf(filename) == -1) { // if file doesn't already exist:
        filenames.push(filename);
        writer.add(filename, new zip.BlobReader(fblob), function() {
          // callback
          f++;
          if (f < vbos.length) {
            nextFile(f);
          } else close();
        });
      } else {
        console.log(filename, "is a duplicate, skipping");
        f++;
        if (f < vbos.length) {
          nextFile(f);
        } else close();
      }
    }
    function close() {
        // close the writer
      writer.close(function(blob) {
        // save with FileSaver.js
        saveAs(blob, "example.zip");
        console.log("Done!");
        });
    }
    nextFile(f);
  }, onerror);
}

waitForWorkers(loadTiles);

waitForScene(processTiles);

waitForVBOs(zipBlobs);

}