// Copyright (C) 2014 Arturo Mayorga
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy 
// of this software and associated documentation files (the "Software"), to deal 
// in the Software without restriction, including without limitation the rights 
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
// copies of the Software, and to permit persons to whom the Software is 
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in 
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
// SOFTWARE.

/**
 * @constructor
 * @implements {HGHudWidget}
 */
function GHudRectangle() 
{
    this.transform = mat3.create();
	this.drawTransform = mat3.create();
	this.bgColor = [1, 1, 0, 0.5];
}

GHudRectangle.prototype.bindToContext = GHudWidget.prototype.bindToContext;
GHudRectangle.prototype.setDrawRec    = GHudWidget.prototype.setDrawRec;

/**
 * Set the color for this hud rectangle
 * @param {number} r Red component
 * @param {number] g Green component
 * @param {number} b Blue component
 * @param {number} a Alpha component
 */
GHudRectangle.prototype.setColor = function(r, g, b, a)
{
	this.bgColor[0] = r; this.bgColor[1] = g;
	this.bgColor[2] = b; this.bgColor[3] = a;
};

/**
 * Draw the rectangle
 * @param {Array.<number>} Array of numbers representing a 3 by 3 matrix
 * @param {GShader} Shader program to use for drawing this rectangle
 */
GHudRectangle.prototype.draw = function( mat, shader ) 
{
	mat3.multiply(this.drawTransform, mat, this.transform);
	var gl = this.gl;
	if ( null != shader.uniforms.Kd )
    {
        gl.uniform4fv(shader.uniforms.Kd, this.bgColor);
    }
	
	if ( null != shader.uniforms.hMatrixUniform )
    {
        gl.uniformMatrix3fv(shader.uniforms.hMatrixUniform, false, this.drawTransform);
    }
    
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.recIndxBuffer);
    gl.drawElements(gl.TRIANGLES, this.recIndxBuffer.numItems, gl.UNSIGNED_SHORT, 0);

};


