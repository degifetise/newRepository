package JavaOop;

public class JavaOop {
  public static void main(String[] args) {
    System.out.println("hello degife Tise");
User u = new User();
u.name = "degife tise";
u.membership = "golden award";
InnerUser in = new InnerUser();
in.age = 34;
in.id = 4;


User u2 = new User();
u2.name = "taame tadese";
u2.membership = "UPDE";
System.out.println(u.name);
System.out.println(u.membership);
System.out.println(u2.name);
System.out.println(u2.membership);
System.out.println(in.age);
System.out.println(in.id);
  }

}
