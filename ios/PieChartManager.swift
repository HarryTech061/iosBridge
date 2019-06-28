//
//  PieChartManager.swift
//  IosBridgeDemo
//
//  Created by Harry Nguyen on 6/27/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(PieChartManager)
class PieChartManager: RCTViewManager {
  @objc
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  override func view() -> UIView! {
    return PieChartView(frame: .zero)
  }
}
