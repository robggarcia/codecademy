# Rob Garcia
#Codecademy: Breast Cancer Classifier
#this project uses uses python libraries to make a K-Nearest Neighbor classifier that is trained to predict whether a patient has breast cancer
import codecademylib3_seaborn
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
import matplotlib.pyplot as plt

breast_cancer_data = load_breast_cancer()
#print(breast_cancer_data.data[0])
#print(breast_cancer_data.feature_names)
#print(breast_cancer_data.target)
#print(breast_cancer_data.target_names)
# a target value of 0 is malignant
# a target value of 1 is benign

#split the data into training and validation sets
training_data, validation_data, training_labels, validation_labels = train_test_split(breast_cancer_data.data, breast_cancer_data.target, test_size= 0.2, random_state = 100)

# optomize the value of k
accuracies = []
for k in range(1,100):
  # create a KNeighborsClassifier function using the model from sklearn
  classifier = KNeighborsClassifier(n_neighbors = k)
  #train the classifier using the training set and labels
  classifier.fit(training_data, training_labels)
  # determine how accurate our model is
  #print(classifier.score(validation_data, validation_labels))
  accuracies.append(classifier.score(validation_data, validation_labels))

# create a plot of accuracy vs k values
k_list = range(1,100)
plt.plot(k_list, accuracies)
plt.xlabel("k")
plt.ylabel("Validation Accuracy")
plt.title("Breast Cancer Classifier")
plt.show()
