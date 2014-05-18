attribute vec3 aPositionVertex;
attribute vec2 aTextureVertex;

uniform mat3 uHMatrix;

varying vec2 vTexCoordinate;

void main(void)
{
	gl_Position = vec4( (uHMatrix * aPositionVertex.xyz), 1);
	vTexCoordinate = aTextureVertex;
} 

