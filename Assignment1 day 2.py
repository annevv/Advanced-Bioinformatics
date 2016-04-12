#Day 2 Assignment 1

file_ = 'C://Users//Anne//Documents//Courses//Advanced_Bioinformatics//Day_1//testvcf//PIK3CA.vcf' 
count = 0

with open (file_, 'r' ) as f:
    for line in f:
        
        if line[0] != '#':
            data = line.split('\t')
            
            transcript = data[7].split('|')[6]
            if transcript == 'ENST00000263967':
                count += 1
                
print(count)
            
            