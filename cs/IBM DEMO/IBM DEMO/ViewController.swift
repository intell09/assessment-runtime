//
//  ViewController.swift
//  IBM DEMO
//
//  Created by russell gadsden on 1/3/23.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var ageLabel: UILabel!
    @IBOutlet weak var profileImageView: UIImageView!
    
    @IBOutlet weak var bioLabel: UILabel!
    func setUpAboutMe(){
        
        nameLabel.text = "Kanye West"
        
        titleLabel.text = "Rapper, Fashion Designer, Philanthropist, and GOAT"
        
        ageLabel.text = "Age: 41"
        
        profileImageView.image =  UIImage(named: "58")
        
        bioLabel.text = "Bio: As Kanye West would doubtless tell you himself, he is a  21st-century phenomenon — a producer turned rap superstar who has reinvented hip-hop several times over in the course of a stellar career;  but whose creative genius is sometimes eclipsed by his talent for putting his entire foot in his own mouth. He has made headlines for his bizarre  tweets and his grand pronouncements, his award-show stage invasions, his  outré fashion sense and his flashbulb-popping marriage to Kim Kardashian."
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    setUpAboutMe()
    }


}


