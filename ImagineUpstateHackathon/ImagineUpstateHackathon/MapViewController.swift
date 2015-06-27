//
//  MapViewController.swift
//  ImagineUpstateHackathon
//
//  Created by Harrison Stall on 6/26/15.
//  Copyright (c) 2015 harrison.r.stall@vanderbilt.edu. All rights reserved.
//

import UIKit
import MapKit


class MapViewController: UIViewController, MKMapViewDelegate {

  @IBOutlet weak var mapView: MKMapView!
  @IBOutlet weak var priceLabel: UILabel!
  @IBOutlet weak var spotsAvailLabel: UILabel!
  
  let regionRadius: CLLocationDistance = 10000
  
  
  override func viewDidLoad() {
    super.viewDidLoad()
    //self.mapView.delegate = self as MKMapViewDelegate
    let startingViewLocation = CLLocation(latitude: 34.8444, longitude: -82.3856)
    // Do any additional setup after loading the view.
    

    
    
    centerMapOnLocation(startingViewLocation)
    let point = ParkingLocation(title: "BiLo Center", locationName: "BiLo Center", coordinate: CLLocationCoordinate2D(latitude: 34.8528, longitude:-82.3915), spotsAvail: 0, maxSpots: 0, filledSpots: 0, price: 10)
    
    mapView.delegate = self
    
    mapView.addAnnotation(point)
    
//    let annotation = MKPointAnnotation()
//    annotation.coordinate = CLLocationCoordinate2D(latitude: 34.8528, longitude:-82.3915)
//    annotation.title = "Bon Secours Wellness"
//    annotation.subtitle = "Not a parking lot"
//    mapView.addAnnotation(annotation)
//    println("worked")
    
    
    
    
    
    
    
//    var localNotification: UILocalNotification = UILocalNotification()
//    localNotification.alertAction = "Testing notifications on iOS8"
//    localNotification.alertBody = "Woww it works!!"
//    localNotification.fireDate = NSDate(timeIntervalSinceNow: 2)
//    UIApplication.sharedApplication().scheduleLocalNotification(localNotification)
  }
  
  
  override func didReceiveMemoryWarning() {
    super.didReceiveMemoryWarning()
    // Dispose of any resources that can be recreated.
  }
  
  
  func centerMapOnLocation(location: CLLocation) {
    let coordinateRegion = MKCoordinateRegionMakeWithDistance(location.coordinate,regionRadius * 2.0, regionRadius * 2.0)
    mapView.setRegion(coordinateRegion, animated: true)
  }
  

  override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
  }
  
  // 1
  func mapView(mapView: MKMapView!, viewForAnnotation annotation: MKAnnotation!) -> MKAnnotationView! {
    if let annotation = annotation as? ParkingLocation {
      let identifier = "pin"
      var view: MKPinAnnotationView
      if let dequeuedView = mapView.dequeueReusableAnnotationViewWithIdentifier(identifier)
        as? MKPinAnnotationView { // 2
          dequeuedView.annotation = annotation
          view = dequeuedView
      } else {
        // 3
        view = MKPinAnnotationView(annotation: annotation, reuseIdentifier: identifier)
        view.canShowCallout = true
        view.calloutOffset = CGPoint(x: -5, y: 5)
        view.rightCalloutAccessoryView = UIButton.buttonWithType(.DetailDisclosure) as! UIView
        
        // THIS IS WHERE I SHOULD HANDLE THE INFORMATION
        
        
  
        
      }
      return view
    }
    return nil
  }
  
  
  // annotation callout info button opens this mapItem in Maps app

  
  func mapView(mapView: MKMapView!, annotationView view: MKAnnotationView!,
    calloutAccessoryControlTapped control: UIControl!) {
      let location = view.annotation as! ParkingLocation
      
      println ("\(location.title) testing ")
      priceLabel.text = "$\(location.price)"
      if location.spotsAvail < 1 {
        spotsAvailLabel.text = "SPOTS UNAVAILABLE"
      } else {
        spotsAvailLabel.text = "SPOTS AVAILABLE: \(location.spotsAvail)"
      }
//      let launchOptions = [MKLaunchOptionsDirectionsModeKey: MKLaunchOptionsDirectionsModeDriving]
//      location.mapItem().openInMapsWithLaunchOptions(launchOptions)
  }
  
  @IBAction func makeReservationButtonPressed(sender: UIButton) {
    let alertController = UIAlertController(title: "You've snagged a spot!", message:
      "You have secured a spot at this parking garage.", preferredStyle: UIAlertControllerStyle.Alert)
    alertController.addAction(UIAlertAction(title: "Dismiss", style: UIAlertActionStyle.Default,handler: nil))
    
    sleep(1)
    
    self.presentViewController(alertController, animated: true, completion: nil)
    
    
    
  }
  
}
