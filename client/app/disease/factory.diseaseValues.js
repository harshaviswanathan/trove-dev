'use strict';

var app = angular.module('troveApp');

app.factory('diseaseValues', function() {
    return {
        'BODY CT' : [
            {"SBO":7},
            {"Appendicitis":3},
            {"Cholecystitis":3},
            {"Pancreatitis":2},
            {"Colitis":5},
            {"Liver lesions":5},
            {"Pancreas lesions":3},
            {"Nephrolithiases":5},
            {"Renal mass":3},
            {"Hydronephrosis":5},
            {"Adnexal mass":2},
            {"Peritoneal disease":3},
            {"GI malignancy":5},
            {"GU malignancy":2}
        ],
        'GI' : [
            {"Post-surgical leak":2},
            {"Reflux":5},
            {"Hiatal hernia":5},
            {"Dysmotility":5},
            {"Penetration/Aspiration":5},
            {"Esophageal obstruction (partial)": 2},
            {"Bladder leak": 2},
            {"Uterine anomalies": 1},
            {"Blocked/Absent Fallopian tube": 1},
            {"SBO": 5},
            {"Ileus": 5},
            {"Pneumoperitneum":3},
            {"Gallstone":3},
            {"Kidney stone":3},
            {"Enteric tube position": 5},
            {"Foreign body retained": 1},
            {"Foreign body ingested": 1}
        ],
        'US': [
            {"Thyroid nodules":3},
            {"DVT":3},
            {"Cholecystitis":2},
            {"Hydronephrosis":3},
            {"Renal stone":2},
            {"Liver lesions":3},
            {"Carotid stenosis":2},
            {"Varicocele":3},
            {"Ovary/Testicular Torsion": 2},
            {"Ectopic":2},
            {"Ovarian mass": 2},
            {"Endometrial disease": 2},
            {"Fibroids":3},
            {"Ascites/FAST":3},
            {"Transplant kidney pathology": 3},
            {"Aortic aneurysm":2}
        ],
        'NUCS':[
            {"Graves":10},
            {"Thyroiditis":5},
            {"Thyroid adenoma":2},
            {"Metastatic throid uptake":10},
            {"Cholycystitis":5},
            {"Decreased GB EF":5},
            {"Osteomyelitis":3},
            {"Bone metastases":10},
            {"Pulmonary embolism": 5},
            {"Alzheimers":3},
            {"Renal dysfunction": 10},
            {"Neuroendocrine tumor": 2},
            {"Metastatic cancer (PET)":10},
            {"Gastroparesis":10}
        ],
        'BONE':[
            {"Postop fracture evaluation":5},
            {"Pelvic fracture":5},
            {"Shoulder dislocation":5},
            {"Avascular necrosis":3},
            {"Hip fracture":5},
            {"Ankle fracture": 5},
            {"Osteomyelitis":3},
            {"Bone tumor":3},
            {"Pathologic fracture":3},
            {"Hardware complications": 5},
            {"Wrist fracture":5},
            {"Arthritis":5}
        ],
        'CHEST INPT':[
            {"Sarcoid": 2},
            {"Mesothelioma":1},
            {"Benign fibrous tumor of the pleura":1},
            {"Lung cancer, primary or metastatic":3},
            {"Lymphoma":2},
            {"PCP": 2},
            {"PE": 4},
            {"Thymoma":1},
            {"Thyroid goiter/cancer":1},
            {"Pneumothorax":3},
            {"Pulmonary edema":4},
            {"Pneumonia, all":4},
            {"Interstitial lung disease":3},
            {"Septic emboli":2},
            {"Silicosis":1},
            {"Hypersensitivity pneumonitis": 1},
            {"Diffuse alveolar hemorrhage": 2},
            {"Pulmonary alveolar proteinosis": 1},
            {"TB": 3},
            {"Lymphangiomyomatosis":1},
            {"Pulmonary sequestration":1}
        ]
    }
});