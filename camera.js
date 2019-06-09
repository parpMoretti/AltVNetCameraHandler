/// <reference path="../altv-client.d.ts"/>
/// <reference path="../natives.d.ts"/>
import * as alt from 'alt';
import * as native from 'natives';

var camera = null;
var interpolCam = null;

alt.onServer('interpolateCamera', interpolateCamera);
alt.onServer('destroyCamera', destroyCamera);
alt.onServer('createCamera', createCamera);

function interpolateCamera(pos1X, pos1Y, pos1Z, rot1, fov, pos2X, pos2Y, pos2Z, rot2, fov2, duration) {
    
    if (camera != null || interpolCam != null) {
        destroyCamera;
    }

    native.setFocusArea(pos1X, pos1Y, pos1Z, 0.0, 0.0, 0.0);
    native.setHdArea(pos1X, pos1Y, pos1Z, 30)

    camera = native.createCamWithParams("DEFAULT_SCRIPTED_CAMERA", pos1X, pos1Y, pos1Z, 0, 0, rot1, fov, false, 0);
    interpolCam = native.createCamWithParams("DEFAULT_SCRIPTED_CAMERA", pos2X, pos2Y, pos2Z, 0, 0, rot2, fov2, false, 0);
    native.setCamActiveWithInterp(interpolCam, camera, duration, 1, 1);
    native.renderScriptCams(true, false, 0, true, false);
}

function destroyCamera() {
    if (camera != -1 || interpolCam != -1) {
        native.destroyAllCams(true);
        native.renderScriptCams(false, false, 0, false, false);
        camera = null;
        interpolCam = null;
    }
}

function createCamera(position, rotation, fov) {
    if (camera != null || interpolCam != null) {
        destroyCamera;
    }
    camera = native.createCamWithParams("DEFAULT_SCRIPTED_CAMERA", position.X, position.Y, position.Z, rotation.Z, fov, 0, 2, false, 0);
    native.setCamActive(camera, true);
    native.renderScriptCams(true, false, 0, true, false);
}