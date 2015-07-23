
// batch_export.js
// rough draft of batch tile export from Tangram -
// prepares tiles for conversion by vbo-export
//
// TODO:
// take in a selection of tiles from landgrab and pass files/data directly to vbo-export
//

window.exportVBO = function (callback) {

console.log("Beginning VBO export");

var mytiles = [
{'x': 19294, 'y': 24642.0, 'z': 16}];

 // {'x': 9648.0, 'y': 12312, 'z': 15},
 // {'x': 9650.0, 'y': 12319.0, 'z': 15},
 // {'x': 9651.0, 'y': 12314.0, 'z': 15},
 // {'x': 9649.0, 'y': 12315, 'z': 15}]
 // ,
 // {'x': 9654.0, 'y': 12305.0, 'z': 15},
 // {'x': 9654.0, 'y': 12311.0, 'z': 15},
 // {'x': 9654.0, 'y': 12304.0, 'z': 15},
 // {'x': 9651.0, 'y': 12313, 'z': 15},
 // {'x': 9647.0, 'y': 12316.0, 'z': 15},
 // {'x': 9648, 'y': 12317.0, 'z': 15},
 // {'x': 9650.0, 'y': 12320.0, 'z': 15},
 // {'x': 9649.0, 'y': 12318, 'z': 15},
 // {'x': 9653.0, 'y': 12313.0, 'z': 15},
 // {'x': 9653.0, 'y': 12305.0, 'z': 15},
 // {'x': 9652.0, 'y': 12308, 'z': 15},
 // {'x': 9649, 'y': 12317.0, 'z': 15},
 // {'x': 9648.0, 'y': 12314.0, 'z': 15},
 // {'x': 9650.0, 'y': 12312, 'z': 15},
 // {'x': 9651.0, 'y': 12307.0, 'z': 15},
 // {'x': 9652.0, 'y': 12313.0, 'z': 15},
 // {'x': 9654.0, 'y': 12303.0, 'z': 15},
 // {'x': 9654.0, 'y': 12300.0, 'z': 15},
 // {'x': 9649.0, 'y': 12316, 'z': 15},
 // {'x': 9648.0, 'y': 12315, 'z': 15},
 // {'x': 9647.0, 'y': 12315.0, 'z': 15},
 // {'x': 9654.0, 'y': 12307.0, 'z': 15},
 // {'x': 9647, 'y': 12320.0, 'z': 15},
 // {'x': 9648.0, 'y': 12312.0, 'z': 15},
 // {'x': 9649.0, 'y': 12320.0, 'z': 15},
 // {'x': 9648.0, 'y': 12313.0, 'z': 15},
 // {'x': 9650.0, 'y': 12314, 'z': 15},
 // {'x': 9656.0, 'y': 12301.0, 'z': 15},
 // {'x': 9652, 'y': 12311.0, 'z': 15},
 // {'x': 9654.0, 'y': 12310.0, 'z': 15},
 // {'x': 9647.0, 'y': 12314.0, 'z': 15},
 // {'x': 9650.0, 'y': 12316.0, 'z': 15},
 // {'x': 9652.0, 'y': 12309, 'z': 15},
 // {'x': 9650.0, 'y': 12310.0, 'z': 15},
 // {'x': 9646.0, 'y': 12321.0, 'z': 15},
 // {'x': 9648.0, 'y': 12321.0, 'z': 15},
 // {'x': 9652.0, 'y': 12312, 'z': 15},
 // {'x': 9653.0, 'y': 12306, 'z': 15},
 // {'x': 9655.0, 'y': 12301, 'z': 15},
 // {'x': 9651, 'y': 12309.0, 'z': 15},
 // {'x': 9650.0, 'y': 12313, 'z': 15},
 // {'x': 9653, 'y': 12309.0, 'z': 15},
 // {'x': 9651.0, 'y': 12315.0, 'z': 15},
 // {'x': 9646.0, 'y': 12319.0, 'z': 15},
 // {'x': 9647.0, 'y': 12319.0, 'z': 15},
 // {'x': 9653.0, 'y': 12311.0, 'z': 15},
 // {'x': 9653.0, 'y': 12303.0, 'z': 15},
 // {'x': 9650.0, 'y': 12309.0, 'z': 15},
 // {'x': 9652.0, 'y': 12314.0, 'z': 15},
 // {'x': 9654.0, 'y': 12306.0, 'z': 15},
 // {'x': 9654.0, 'y': 12309.0, 'z': 15},
 // {'x': 9650.0, 'y': 12311, 'z': 15},
 // {'x': 9648, 'y': 12316.0, 'z': 15},
 // {'x': 9649.0, 'y': 12312.0, 'z': 15},
 // {'x': 9654.0, 'y': 12308.0, 'z': 15},
 // {'x': 9656.0, 'y': 12302.0, 'z': 15},
 // {'x': 9653.0, 'y': 12302.0, 'z': 15},
 // {'x': 9647.0, 'y': 12318.0, 'z': 15},
 // {'x': 9655.0, 'y': 12302.0, 'z': 15},
 // {'x': 9655.0, 'y': 12300.0, 'z': 15},
 // {'x': 9648, 'y': 12319.0, 'z': 15},
 // {'x': 9652.0, 'y': 12307.0, 'z': 15},
 // {'x': 9651.0, 'y': 12308.0, 'z': 15},
 // {'x': 9653, 'y': 12307.0, 'z': 15},
 // {'x': 9649, 'y': 12314.0, 'z': 15},
 // {'x': 9650.0, 'y': 12315, 'z': 15},
 // {'x': 9654.0, 'y': 12301.0, 'z': 15},
 // {'x': 9649.0, 'y': 12313, 'z': 15},
 // {'x': 9652.0, 'y': 12306.0, 'z': 15},
 // {'x': 9649.0, 'y': 12311.0, 'z': 15},
 // {'x': 9655.0, 'y': 12303.0, 'z': 15},
 // {'x': 9653.0, 'y': 12304.0, 'z': 15},
 // {'x': 9651, 'y': 12311.0, 'z': 15},
 // {'x': 9646.0, 'y': 12320.0, 'z': 15},
 // {'x': 9648.0, 'y': 12320.0, 'z': 15},
 // {'x': 9656.0, 'y': 12300.0, 'z': 15},
 // {'x': 9650.0, 'y': 12318.0, 'z': 15},
 // {'x': 9653, 'y': 12310.0, 'z': 15},
 // {'x': 9653.0, 'y': 12312.0, 'z': 15},
 // {'x': 9650.0, 'y': 12308.0, 'z': 15},
 // {'x': 9649.0, 'y': 12310.0, 'z': 15},
 // {'x': 9651.0, 'y': 12312, 'z': 15},
 // {'x': 9649, 'y': 12319.0, 'z': 15},
 // {'x': 9651.0, 'y': 12310, 'z': 15},
 // {'x': 9654.0, 'y': 12302.0, 'z': 15},
 // {'x': 9652.0, 'y': 12310, 'z': 15},
 // {'x': 9653, 'y': 12308.0, 'z': 15},
 // {'x': 9652.0, 'y': 12305.0, 'z': 15},
 // {'x': 9647.0, 'y': 12321.0, 'z': 15}];

// find tile range
min = {x: Infinity, y: Infinity};
max = {x:-Infinity, y: -Infinity};
for (t in mytiles) {
  mt = mytiles[t];
  // console.log(mt);
  // console.log(min);
  // console.log(max);

  min.x = Math.min(min.x, mt.x);
  min.y = Math.min(min.y, mt.y);
  max.x = Math.max(max.x, mt.x);
  max.y = Math.max(max.y, mt.y);
}
// console.log("min:", min);
// console.log("max:", max);

// prepare a list of vbos
vbos = [];

function waitForVerts(callback, coords, offset, name) {
  console.log('waitsforverts');
  var coords = coords;
  var name = name;
  setTimeout(function () {
    // todo: determine which of these are necessary
    // also todo: trigger this based on a loadCoordinates callback
    if (typeof scene.tile_manager.tiles[coords] != "undefined") {
      if (typeof scene.tile_manager.tiles[coords].meshes != "undefined") {
        if ( Object.keys(scene.tile_manager.tiles[coords].meshes).length != 0) {
          if (typeof scene.tile_manager.tiles[coords].meshes.polygons != "undefined") {
            if (typeof scene.tile_manager.tiles[coords].meshes.polygons.vertex_data != "undefined") {
                callback(coords, offset, name);
                return;
            }
          }
        }
      }
    }
    // if not ready, wait a sec and try again
    waitForVerts(callback, coords, offset, name);
  }, 1000);
}

function waitForWorkers(callback) {
  setTimeout(function () {
    if (typeof scene.workers != "undefined") {
      if (typeof scene.workers[scene.next_worker] != "undefined") {
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

function waitForVBOs(callback) {
  setTimeout(function () {
    // console.log("vbos.length:", vbos.length);
    // console.log("mytiles.length", mytiles.length);
    if (vbos.length == mytiles.length) {

        callback();
        return;
    }
    // if not ready, wait a sec and try again
    waitForVBOs(callback);
  }, 1000);
}

function loadTiles() {
  var num = mytiles.length;
  console.log("Loading", num, "tiles");
  for (t in mytiles) {
    scene.tile_manager.loadCoordinate(mytiles[t]);
  }
  console.log("%d tiles loaded", num);
}

function processVerts(coords, offset, name) {
  console.log("Processing tile", vbos.length + 1, "of", mytiles.length, "-", (((vbos.length + 1)/mytiles.length)*100).toFixed(2), "%");

  // original
  // verts = Array.prototype.slice.call(new Float32Array(scene.tile_manager.tiles[coords].meshes.polygons.vertex_data));

  // 2nd try

  // 3rd try
  var vd = scene.tile_manager.tiles[coords].meshes.polygons.vertex_data;
  // var vd = scene.tile_manager.tiles["local/15/9648/12312/15"].meshes.polygons.vertex_data
  var buffer = new ArrayBuffer(vd.length);
  var Uint8view = new Uint8Array(buffer)
  for(i=0;i<vd.length;i++){
      Uint8view[i]=vd[i];
  }
  var int32View = new Int32Array(buffer);
  verts = Array.prototype.slice.call(int32View)


  console.log("verts", verts);
  stride = scene.tile_manager.tiles[coords].meshes.polygons.vertex_layout.stride;
  length = verts.length / stride;
  console.log("length:", length)

  // apply offset to tile vertices
  // for (v in verts) {
  //     if (v % stride == 0) verts[v] += offset.x;
  //     if (v % stride == 1) verts[v] -= offset.y;
  // }

  // make it one long string
  verts = verts.join('\n');
  // add it to file list for zipping
  vbos.push({name: name, verts: verts});
  // verts = null
}

for (t in mytiles) {
  mt = mytiles[t];
  // coords = mt.x+"/"+mt.y+"/"+mt.z;
  coords = "local/"+mt.z+"/"+mt.x+"/"+mt.y+"/"+mt.z;
  name = mt.x+"-"+mt.y+"-"+mt.z;

  // calculate offset relative to the extents of the tile batch -
  // the top-left tile is 0,0 - one tile over is 1,0 - one tile down is 0,1
  var offset = {x: mt.x - min.x, y: mt.y - min.y};
  // multiply the offset by the local tile coordinate range for vertex position offset
  offset.x *= 4096;
  offset.y *= 4096;
  // console.log("offset1:", offset);

  // wait for tile to load, then process it
  waitForVerts(processVerts, coords, offset, name);
}

zip.workerScriptsPath = "/lib/";

function zipBlobs() {
  console.log('zipblobs');
  zip.createWriter(new zip.BlobWriter("application/zip"), function(writer) {
    console.log("Creating zip...");
    var f = 0;
    function nextFile(f) {
      fblob = new Blob([vbos[f].verts], { type: "text/plain" });
      writer.add(vbos[f].name+".vbo", new zip.BlobReader(fblob), function() {
        // callback
        f++;
        if (f < vbos.length) {
          nextFile(f);
        } else close();
      });
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

waitForVBOs(zipBlobs);

}