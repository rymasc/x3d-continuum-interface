public class Quanser{
  static{
    System.loadLibrary("quanser_jni_hil");
  }

  public native void connectWrite(float[] voltage);

}
