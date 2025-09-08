package com.example.model;

public class Format{
    private String name;
    private boolean available;
    public Format(){}
    public Format(String name,boolean available)
    {
        this.name=name;
        this.available=available;
    }
    public String getName()
    {
        return name;
    }
    public void setName(String name) { this.name = name; }
      public boolean isAvailable() { return available; }
    public void setAvailable(boolean available) { this.available = available; }
    
}