
class ToolManager{

	constructor(editor) {
		this.editor=editor;
		activeTool=null;
		
		editor.signals.toolChanged.add( function (name) {
			console.log("ToolManager.toolChanged")

			// if(this.activeTool)
			// 	this.activeTool.cancel();
			// this.activeTool=newTool;
			// this.activeTool.activate();
		} );
	}

}

class Tool{
	constructor(  ) {
	}

	activate()
	{}
  
	deactivate(view)
	{}
  
	// The {//draw} method is called by SketchUp whenever the view is refreshed to
	// allow the tool to do its own drawing. If the tool has some temporary graphics
	// that it wants displayed while it is active, it should implement this method
	// and draw to the {Sketchup::View}.
	//
	// @example
	//   draw(view)
	//     // Draw a square.
	//     points = [
	//       Geom::Point3d.new(0, 0, 0),
	//       Geom::Point3d.new(9, 0, 0),
	//       Geom::Point3d.new(9, 9, 0),
	//       Geom::Point3d.new(0, 9, 0)
	//     ]
	//     // Fill
	//     view.drawing_color = Sketchup::Color.new(255, 128, 128)
	//     view.draw(GL_QUADS, points)
	//     // Outline
	//     view.line_stipple = '' // Solid line
	//     view.drawing_color = Sketchup::Color.new(64, 0, 0)
	//     view.draw(GL_LINE_LOOP, points)
	//   {}
	//
	// @note If you draw outside the model bounds you need to implement
	//   {Tool//getExtents} which return a bounding box large enough to include the
	//   points you draw. Otherwise your drawing will be clipped.
	//
	// @param [Sketchup::View] view
	//   A View object where the method was invoked.
	//
	// @see getExtents
	//
	// @see Sketchup::View//draw
	//
	// @version SketchUp 6.0
	draw(view)
	{}
  
	// The {//enableVCB?} method is used to tell SketchUp whether to allow the user
	// to enter text into the VCB (value control box, aka the "measurements" panel).
	// If you do not implement this method, then the vcb is disabled by default.
	//
	// @example
	//   // For this tool, allow vcb text entry while the tool is active.
	//   enableVCB?
	//     return true
	//   {}
	//
	// @return [Boolean] Return +true+ if you want the VCB enabled
	//
	// @version SketchUp 6.0
	enableVCB()//?
	{}
  
	// In order to accurately draw things, SketchUp needs to know the extents of
	// what it is drawing. If the tool is doing its own drawing, it may need to
	// implement this method to tell SketchUp the extents of what it will be
	// drawing. If you don't implement this method, you may find that part of what
	// the tool is drawing gets clipped to the extents of the rest of the
	// model.
	//
	// This must return a {Geom::BoundingBox}. In a typical implementation, you
	// will create a new {Geom::BoundingBox}, add points to set the extents of the
	// drawing that the tool will do and then return it.
	//
	// @example
	//   getExtents
	//     bb = Sketchup.active_model.bounds
	//     return bb
	//   {}
	//
	// @return [Geom::BoundingBox]
	//
	// @version SketchUp 6.0
	getExtents()
	{}
  
  
	// The {//getMenu} method is called by SketchUp to let the tool provide its own
	// context menu. Most tools will not want to implement this method and,
	// instead, use the normal context menu found on all entities.
	getMenu()
	{}
  
	// The {//onCancel} method is called by SketchUp to cancel the current operation
	// of the tool. The typical response will be to reset the tool to its initial
	// state.
	//
	// The reason identifies the action that triggered the call. The reason can be
	// one of the following values:
	//
	// - +0+: the user canceled the current operation by hitting the escape key.
	// - +1+: the user re-selected the same tool from the toolbar or menu.
	// - +2+: the user did an undo while the tool was active.
	//
	// @example
	//   onCancel(reason, view)
	//     puts "MyTool was canceled for reason ////{reason} in view: //{view}"
	//   {}
	//
	// @note When something is undone {//onCancel} is called before the undo is
	//   actually executed. If you need to do something with the model after an undo
	//   use {Sketchup::ModelObserver//onTransactionUndo}.
	//
	// @note When {//onKeyDown} is implemented and returns +true+, pressing Esc
	//   doesn't trigger {//onCancel}.
	//
	onCancel(reason, view)
	{}
  
	onKeyDown(key, repeat, flags, view)
	{}
  
	onKeyUp(key, repeat, flags, view)
	{}
  
	onLButtonDoubleClick(flags, x, y, view)
	{}
  
	onLButtonDown(flags, x, y, view)
	{}
  
	onLButtonUp(flags, x, y, view)
	{}
  
	onMButtonDoubleClick(flags, x, y, view)
	{}
  
	onMButtonDown(flags, x, y, view)
	{}
  
	onMButtonUp(flags, x, y, view)
	{}
  
	// The {//onMouseEnter} method is called by SketchUp when the mouse enters the
	// viewport.
	onMouseEnter(view)
	{}
	onMouseLeave(view)
	{}
  
	onMouseMove(flags, x, y, view)
	{}
  
	//
	// @return [Boolean] Return +true+ to prevent SketchUp from performing default
	//   zoom action.
	onMouseWheel(flags, delta, x, y, view)
	{}
  
	onRButtonDoubleClick(flags, x, y, view)
	{}
	onRButtonDown(flags, x, y, view)
	{}
  
	onRButtonUp(flags, x, y, view)
	{}
  
	// The {//onReturn} method is called by SketchUp when the user hit the Return key
	// to complete an operation in the tool. This method will rarely need to be
	// implemented.
	onReturn(view)
	{}
  
	// The {//onSetCursor} method is called by SketchUp when the tool wants to set
	// the cursor.
	// @return [Boolean] Return +true+ to prevent SketchUp using the default cursor.
	onSetCursor()
	{}
  
	// The {//onUserText} method is called by SketchUp when the user has typed text
	// into the VCB and hit return.
	onUserText(text, view)
	{}
  
	// The {//resume} method is called by SketchUp when the tool becomes active again
	// after being suspended.
	resume(view)
	{}
  
	// The {//suspend} method is called by SketchUp when the tool temporarily becomes
	// inactive because another tool has been activated. This typically happens
	// when a viewing tool is activated, such as when orbit is active due to the
	// middle mouse button.
	suspend(view)
	{}
  
  }



class InputPoint{
	constructor(  ) {
	}

	pick(view,x,y){
		//figure out what is under x,y
		const inPos = new THREE.Vector2();
		inPos.fromArray( [x,y] );

		var objects = view.editor.scene.children;
		var intersects = view.getIntersects( inPos, objects );
		//console.log("scene:children:"+[scene,objects])

		var pointThreshold = 0.03;
		var edgeThreshold = 0.03;

		//cursor pos in screen space. 
		var curPos=raycaster.ray.at(1.0,new THREE.Vector3(0, 0, - 1)).project(camera);
		
		viewCursorInferString="Nothing";
		viewCursorValid=false;
		
		//default to ground if over
		var point = raycaster.ray.intersectPlane(groundPlane,new THREE.Vector3(0, 0, - 1));
		if(point!==null){
			viewCursor.position.set( point.x,point.y,point.z );
			viewCursorInferString="On Ground";					
			viewCursorValid=true;
		}
		
		if ( intersects.length > 0 ) {
			var curDist=edgeThreshold; //start at threshhold.
			viewCursorInferString= " ";

			//for (var i = 0, len = intersects.length; i < len; i++) {
			for (var i = intersects.length-1;i >=0 ; i--) {//go back to front.
				var intersect = intersects[ i ];

				if(intersect.object.name=="Edge")
				{
					//screen dist to edge.
					var screenDist = curPos.distanceTo( intersect.point.clone().project(camera));
					
					if(screenDist<curDist)//closer previous edges.
					{
						curDist=screenDist;
						var v0=new THREE.Vector3(intersect.object.geometry.attributes.position.array[0],
							intersect.object.geometry.attributes.position.array[1],
							intersect.object.geometry.attributes.position.array[2]);
						//console.log("v0:"+JSON.stringify(v0))
						var v1=new THREE.Vector3(intersect.object.geometry.attributes.position.array[3],
							intersect.object.geometry.attributes.position.array[4],
							intersect.object.geometry.attributes.position.array[5]);
						//console.log("v0 dist:"+curPos.distanceTo( v0.clone().project(camera)))
						if( curPos.distanceTo( v0.clone().project(camera))<pointThreshold){
							viewCursorInferString="On Endpoint";			
							viewCursor.position.copy(v0);
							viewCursorValid=true;							
						}else if( curPos.distanceTo( v1.clone().project(camera))<pointThreshold){
							viewCursorInferString="On Endpoint";			
							viewCursor.position.copy(v1);
							viewCursorValid=true;							
						}else {
							viewCursorInferString="On Edge";
							viewCursor.position.copy( intersect.point );
							viewCursorValid=true;							
						}						
					}
				}
				else{
					viewCursorInferString="On Object "+intersect.object.name;		
					viewCursor.position.copy( intersect.point );
					viewCursorValid=true;
					}
			}
		}
		else
		{
			var inferIntersects = getIntersects( onDoubleClickPosition, lastInferAxes );
			if ( inferIntersects.length > 0 ) {
				for (var i = 0, len = inferIntersects.length; i < len; i++) {
					var intersect = inferIntersects[ i ];
					var inferedPoint = intersect.point;
					//console.log("Infer Axis");
					var dist= inferedPoint.distanceTo( intersect.object.position );	
					if(dist<pointThreshold){
						//snap to axis origin.
						viewCursorInferString="Infer Origin";		
						viewCursor.position.set( intersect.object.position.x,intersect.object.position.y,intersect.object.position.z );
						
						//break at this point?
					}else
					{
						//snap to axis line.
						viewCursorInferString="Infer Axis";		
		//console.log( inferedPoint.distanceTo(raycaster.ray.at(intersect.distance)));
						//dont use computed intersect point. Instead create new from closestPointToPoint
						viewCursor.position.set( inferedPoint.x,inferedPoint.y,inferedPoint.z );
					}
					viewCursorValid=true;
				}
			}		
			else{
//ground plane
			}
		}

	}

}
class LineTool extends Tool {

	constructor(  ) {
		super( );
	}


	activate()
	{
		console.log("LineTool.activate")
		this.mouseIp=new InputPoint()
		this.firstIp= new InputPoint();
	}
	deactivate()
	{
		console.log("LineTool.deactivate")
		//view.invalidate
	}
	resume()
	{}
	suspend()
	{}
	onCancel()
	{}
	onMouseMove(){}
	onLbutton(){}
	onSetCursor(){}
	draw(){}
	updateUi(){}
	resetTool(){}
	pickedPoints(){}
	drawPreview(){}
	createEdge(){}

	//activate
	//active_model.select_tool(new LineTool())

	dispose() {

		//this.geometry.dispose();
		//this.material.dispose();

	}

}

class MoveTool extends Tool {

	constructor(  ) {
		super( );
	}
	activate()
	{
		console.log("MoveTool.activate")
	}
	deactivate()
	{
		console.log("MoveTool.deactivate")
	}
	resume()
	{}
	suspend()
	{}
	onCancel()
	{}
	onMouseMove(){}
	onLbutton(){}
	onSetCursor(){}
	draw(){}
	updateUi(){}
	resetTool(){}
	pickedPoints(){}
	drawPreview(){}

	//activate
	//active_model.select_tool(new LineTool())

	dispose() {

		//this.geometry.dispose();
		//this.material.dispose();

	}

}
class SelectTool extends Tool {

	constructor(  ) {
		super( );
	}
	activate()
	{
		console.log("SelectTool.activate")
	}
	deactivate()
	{
		console.log("SelectTool.deactivate")
	}
	onMouseDown(event,position,view)
	{
		console.log("onMouseDown:"+[event,position,view]) 
	}
	onMouseUp(event,position,view)
	{
		let intersects =  view.getIntersects( position )
		view.signals.intersectionsDetected.dispatch( intersects );
		view.render();
		//console.log("onMouseUp:"+[event,position,intersects.length])
	}
	resume()
	{}
	suspend()
	{}
	onCancel()
	{}
	onMouseMove(){}
	onLbutton(){}
	onSetCursor(){}
	draw(){}
	updateUi(){}
	resetTool(){}
	pickedPoints(){}
	drawPreview(){}

	//activate
	//active_model.select_tool(new LineTool())

	dispose() {

		//this.geometry.dispose();
		//this.material.dispose();

	}

}


export { LineTool,MoveTool,SelectTool };
