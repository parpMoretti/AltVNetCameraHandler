# AltVNetCameraHandler

This is a basic resource for AltV.Net serverside c# and JavaScript clientside. Handles the players current camera. This is still a WIP.

## Setup

The `CameraExtension.cs` file is the serverside one. Place the `camera.js` inside your current resources and remember to make sure it's included in the `resource.cfg`

## Usage

Currently we only have interpolate (moving cameras), single camera creation and destroying cameras. More will come over time or if anyone requests it.

### Creating a Camera

```csharp
CameraExtension.CreateCamera(player, positionOfCamera, RotationOfCamera, fov);

CameraExtension.CreateCamera(player, new Position(0,0,0), new Rotation(0,0,0), 50);
```

### Destroying a Camera

```csharp
CameraExtension.DeleteCamera(player);
```

### Interpolation

```csharp
CameraExtension.InterpolateCamera(player, positionOne, rotationOne, fovOne, positionTwo, rotationTwo, fovTwo, duration
```
