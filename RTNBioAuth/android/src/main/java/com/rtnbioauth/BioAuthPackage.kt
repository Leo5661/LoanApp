package com.rtnbioauth;

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfoProvider

class BioAuthPackage : TurboReactPackage() {
  override fun getModule(name: String?, reactContext: ReactApplicationContext): NativeModule? {
    return if(name == BioAuthModule.NAME) {
      BioAuthModule(reactContext);
    } else {
      null
    }
  }

  override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
    mapOf(
      BioAuthModule.NAME to ReactModuleInfo(
        BioAuthModule.NAME,
        BioAuthModule.NAME,
        false,  //canOverrideExistingModule
        false,  //needsEagerInit
        true, //hasConstants
        false,  //isCxxModule
        true, //isTurboModule 
      )
    )
  }
}