var whirldObject : WhirldObject;
var floorObject : GameObject;

function OnSceneGenerated() {
	
	if(!whirldObject || !whirldObject.params["Texture"] || !floorObject) return;
	
	floorObject.renderer.material.mainTexture = whirldObject.params["Texture"];
	
}