#include <jni.h>
#include <stdio.h>
#include <hil.h>
#include <quanser_messages.h>
#include "rscott_quanser_hil.h"

JNIEXPORT void JNICALL Java_Quanser_connectWrite(JNIEnv *env, jobject thisObj, jfloatArray voltage){
	t_card board;
	t_card mini_board;

	int i;
	t_uint32 channels[] = {0,1,2,3,4,5,6,7};
	t_uint32 minichannel[] = {0};
	jfloat *fltArray = (*env)->GetFloatArrayElements(env,voltage,0);

	t_double buffer[9];
	t_double buffer2[] = {fltArray[8]};
	
	t_error write_result;

	t_error result = hil_open("q8_usb", "0", &board);
	t_error res2 = hil_open("q8_usb", "1", &mini_board);

	for(i=0; i<9; i++){
		buffer[i] = fltArray[i];
	}

	if(result == 0){
		printf("connected to quanser board");
		write_result = hil_write_analog(board, channels, ARRAY_LENGTH(channels), buffer);
		write_result = hil_write_analog(mini_board, minichannel, ARRAY_LENGTH(minichannel), buffer2);
		hil_close(board);
		hil_close(mini_board);

	} else {
		printf("error");
	}
	
	return;
}