attribute vec3 aPositionVertex;
attribute vec2 aTextureVertex;

uniform mat3 uHMatrix;

varying vec2 vTexCoordinate;
varying vec2 vBlurTexCoords[8];

void main(void)
{
	gl_Position = vec4( (uHMatrix * aPositionVertex.xyz), 1);
	
	vTexCoordinate = aTextureVertex;
	vBlurTexCoords[0] = vTexCoordinate + vec2(-0.028, 0.0);
    vBlurTexCoords[1] = vTexCoordinate + vec2(-0.020, 0.0);
    vBlurTexCoords[2] = vTexCoordinate + vec2(-0.008, 0.0);
    vBlurTexCoords[3] = vTexCoordinate + vec2(-0.004, 0.0);
    vBlurTexCoords[4] = vTexCoordinate + vec2( 0.004, 0.0);
    vBlurTexCoords[5] = vTexCoordinate + vec2( 0.008, 0.0);
    vBlurTexCoords[6] = vTexCoordinate + vec2( 0.020, 0.0);
    vBlurTexCoords[7] = vTexCoordinate + vec2( 0.028, 0.0);
} 

