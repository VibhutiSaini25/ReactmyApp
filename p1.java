 package calc;
 import java.util.Scanner;
 class Calculator{
    public void calculate(int a,int b)
    {
        System.out.println("Your result is: "+(a+b));
    }
 }
 class ScCalculator{
    public void calculate(int a,int b)
    {
        System.out.println("Your result is: "+Math.sin(a+b));
    }
 }
 class HyCalculator{
    public void calculate(int a,int b)
    {
        System.out.println("Your result is: "+(a+b));
         System.out.println("Your result is: "+ Math.sin(a+b));
    }
 }
 public class p1{
    public static void main(String[] args)
    {
        Scanner sc=new Scanner(System.in);
        Calculator c=new Calculator();
        c.calculate();
        int x=sc.nextInt();
        System.out.println(x);
        System.out.println("This is the main method");
    }
 }