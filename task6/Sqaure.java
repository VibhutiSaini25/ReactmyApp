package com.vibhuti.shape;
public class Sqaure extends Shape{
    Sqaure(int dim1, int dim2) {
        super(dim1, dim2);
        
    }
    
    public int area(){
        return this.dim1*this.dim1;
    }
    
}
