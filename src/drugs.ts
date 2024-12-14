
 
 
 interface Pharmacokinetics {
   Absorption: string;
   Distribution: string;
   Metabolism: string;
   Excretion: string;
 }
 
 interface ChemicalStructure {
   MolecularFormula: string;
   MolecularWeight: string;
 }
 
 interface UseInSpecialPopulations {
   Pregnancy: string;
   PediatricUse: string;
   GeriatricUse: string;
   HepaticImpairment: string;
   RenalImpairment: string;
 }
 

 
 export interface DrugSchema {
   
   GenericName: string;
   BrandNames: string[];
   DrugClass: string;
   MechanismOfAction: string;
   Pharmacodynamics: string;
   OnsetOfAction: string;
   DurationOfAction: string;
   PeakPlasmaConcentration: string;
   Indications: string[];
   RoutesOfAdministration: string;
   DosageForms: string[];
   StrengthsOfDosageForms: string[];
   Pharmacokinetics: Pharmacokinetics;
   SideEffects: string[];
   DrugInteractions: string[];
   Contraindications: string;
   ChemicalStructure: ChemicalStructure;
   UseInSpecialPopulations: UseInSpecialPopulations;
   StorageAndHandling: string;
   
 }
 

const drugs: DrugSchema[] = [{
    
    GenericName:"Metformin",
    BrandNames:[
       "Glucophage",
       "Glumetza",
       "Fortamet",
       "Riomet"
    ],
    DrugClass:"Biguanide",
    MechanismOfAction:"Metformin decreases hepatic glucose production,decreases intestinal absorption of glucose, and improves insulin sensitivity by increasing peripheral glucose uptake and utilization.",
    Pharmacodynamics:"Metformin lowers both basal and postprandial blood glucose levels by improving glucose tolerance. Unlike sulfonylureas, it does not produce hypoglycemia or stimulate insulin secretion.",
    OnsetOfAction:"1 to 2 hours after oral administration",
    DurationOfAction:"12 hours for the immediate-release form, up to 24 hours for the extended-release form",
    PeakPlasmaConcentration:"2 to 3 hours for immediate-release, 7 hours for extended-release",
    Indications:[
       "Type 2 Diabetes Mellitus",
       "Polycystic Ovary Syndrome (off-label)"
    ],
    RoutesOfAdministration:"Oral",
    DosageForms: ["Tablet"],
    StrengthsOfDosageForms:[
       
          "500 mg",
          "850 mg",
          "1000 mg"
       
],
    Pharmacokinetics:{
       Absorption:"Absorbed slowly and incompletely after oral administration. Absolute bioavailability is 50 to 60%.",
       Distribution:"It is negligibly bound to plasma proteins. Distributed rapidly throughout the body with a volume of distribution of approximately 63 to 276 L.",
       Metabolism:"Metformin is not metabolized by the liver or other tissues.",
       Excretion:"Excreted unchanged in the urine. The renal clearance of metformin is greater than 400 mL/min, indicating that tubular secretion is the primary mode of elimination."
    },
    SideEffects:[
       "Gastrointestinal disturbances (nausea, diarrhea)",
       "Lactic acidosis",
       "Vitamin B12 deficiency"
    ],
    DrugInteractions:[
       "Cimetidine can increase metformin concentration by reducing its renal clearance.",
       "Contrast-enhanced studies with iodinated materials may interact.",
       "Alcohol potentiates the effect on lactate metabolism."
    ],
    Contraindications:"Metformin is contraindicated in patients with severe renal impairment, acute or chronic metabolic acidosis, including diabetic ketoacidosis, with or without coma.",
    ChemicalStructure:{
       MolecularFormula:"C4H11N5",
       MolecularWeight:"129.163 g/mol"
    },
    UseInSpecialPopulations:{
       Pregnancy:"Use with caution in pregnant women as no adequate and well-controlled studies demonstrate its safety.",
       PediatricUse:"Approved for use in children aged 10 and older for type 2 diabetes mellitus.",
       GeriatricUse:"Dose selection should be cautious, generally starting at the low end of the dosing range.",
       HepaticImpairment:"Use with caution in patients with hepatic impairment due to increased risk of lactic acidosis.",
       RenalImpairment:"Dose adjustments based on eGFR are necessary due to risk of accumulation and lactic acidosis."
    },
    StorageAndHandling:"Store at 20°C to 25°C (68°F to 77°F), in a tight container protected from moisture."
 },{
    GenericName:"Lisinopril",
    BrandNames:[
       "Prinivil",
       "Zestril"
    ],
    DrugClass:"Angiotensin-converting enzyme inhibitor (ACE inhibitor)",
    MechanismOfAction:"Lisinopril inhibits the angiotensin-converting enzyme, which results in the decreased formation of angiotensin II, leading to vasodilation and reduction in blood pressure.",
    Pharmacodynamics:"Lisinopril lowers blood pressure by reducing peripheral vascular resistance without increasing heart rate. It also decreases aldosterone secretion, resulting in decreased sodium and water retention.",
    OnsetOfAction:"1 hour",
    DurationOfAction:"24 hours",
    PeakPlasmaConcentration:"7 hours",
    Indications:[
       "Hypertension",
       "Heart failure",
       "Acute myocardial infarction",
       "Diabetic nephropathy"
    ],
    RoutesOfAdministration:"Oral",
    DosageForms:["Tablet"],
    StrengthsOfDosageForms:[
          "2.5 mg",
          "5 mg",
          "10 mg",
          "20 mg",
          "30 mg",
          "40 mg"
       ]
    ,
    Pharmacokinetics:{
       "Absorption":"Approximately 25% absorbed orally, consistent with significant interpatient variability.",
       "Distribution":"Not bound to serum proteins; does not readily cross the blood-brain barrier.",
       "Metabolism":"Not metabolized.",
       "Excretion":"Excreted unchanged entirely in urine."
    },
    SideEffects:[
       "Cough",
       "Hypotension",
       "Dizziness",
       "Headache",
       "Hyperkalemia",
       "Renal impairment",
       "Angioedema"
    ],
    DrugInteractions:[
       "Diuretics",
       "Non-steroidal anti-inflammatory drugs (NSAIDs)",
       "Potassium supplements",
       "Lithium"
    ],
    Contraindications:"History of angioedema related to previous treatment with an ACE inhibitor. Hypersensitivity to any component of the product.",
    ChemicalStructure:{
       "MolecularFormula":"C21H31N3O5",
       "MolecularWeight":"405.495 g/mol"
    },
    UseInSpecialPopulations:{
       "Pregnancy":"Category D. Should be discontinued as soon as possible when pregnancy is detected.",
       "PediatricUse":"Effectiveness and safety have been established in pediatric patients aged 6 to 16 years for the treatment of hypertension.",
       "GeriatricUse":"No overall differences in safety or effectiveness have been observed compared with younger patients, but greater sensitivity of some older individuals cannot be ruled out.",
       "HepaticImpairment":"No specific dose adjustment is necessary, but caution is advised.",
       "RenalImpairment":"Dosage adjustment may be necessary based on creatinine clearance levels."
    },
    StorageAndHandling:"Store at 25°C (77°F), with excursions permitted between 15°C and 30°C (59°F and 86°F)."
 },{
    GenericName:"Romiplostim",
    BrandNames:[
       "Nplate"
    ],
    DrugClass:"Thrombopoietin (TPO) receptor agonist",
    MechanismOfAction:"Romiplostim is a thrombopoietin (TPO) receptor agonist that binds to and activates the TPO receptor, stimulating platelet production.",
    Pharmacodynamics:"Romiplostim increases platelet counts in patients with chronic immune thrombocytopenia by stimulating the production of megakaryocytes and consequently increasing platelet production.",
    OnsetOfAction:"The platelet count generally begins to increase within 1-2 weeks of starting treatment with romiplostim.",
    DurationOfAction:"The duration of action is variable depending on the patient’s underlying condition but the platelet count effects can last for several days to a week or more after a single dose.",
    PeakPlasmaConcentration:"The peak plasma concentration of romiplostim is not directly correlated with its therapeutic effect since it acts by stimulating platelet production in the bone marrow.",
    Indications:[
       "Chronic immune thrombocytopenia (ITP) in adults and pediatric patients 1 year of age and older who have had an insufficient response to corticosteroids, immunoglobulins, or splenectomy."
    ],
    RoutesOfAdministration:"Subcutaneous injection",
    DosageForms:["Injection"],
    StrengthsOfDosageForms:
       [
          "125mg","250mg","500mg"
       ],
    Pharmacokinetics:{
       Absorption:"Romiplostim is administered subcutaneously, resulting in systemic exposure.",
       Distribution:"The volume of distribution is approximately 122 mL/kg.",
       Metabolism:"Romiplostim is degraded to small peptides and amino acids via proteolysis.",
       Excretion:"Excretion is through catabolism (peptide hydrolysis); exact details of elimination are not well defined."
    },
    SideEffects:[
       "Headache",
       "Arthralgia (joint pain)",
       "Dizziness",
       "Insomnia",
       "Thrombocytosis (excess platelets)",
       "Neurological changes",
       "Elevated liver function tests"
    ],
    DrugInteractions:[
       "Interference with platelet count evaluations using EDTA blood samples"
    ],
    Contraindications:"Romiplostim is contraindicated in patients with known hypersensitivity to romiplostim or any of its excipients",
    ChemicalStructure:{
       MolecularFormula:"C845H1349N223O243S6",
       MolecularWeight:"17400.0 g/mol"
    },
    UseInSpecialPopulations:{
       Pregnancy:"There are no adequate and well-controlled studies in pregnant women. Use only if clearly needed and the potential benefit justifies the potential risk to the fetus.",
       PediatricUse:"Romiplostim is indicated for use in pediatric patients aged 1 year and older with chronic ITP.",
       GeriatricUse:"No overall differences in safety or effectiveness have been observed between elderly and younger adult patients.",
       HepaticImpairment:"The impact of hepatic impairment on the pharmacokinetics of romiplostim is not fully understood. Use with caution.",
       RenalImpairment:"The impact of renal impairment on the pharmacokinetics of romiplostim is not fully understood. Use with caution."
    },
    StorageAndHandling:"Store romiplostim in the refrigerator at 2°C to 8°C (36°F to 46°F). Protect from light. Do not freeze or shake. Keep in the original carton until time of use."
 }];  
 
 
 export default drugs;