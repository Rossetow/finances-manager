package com.unisinos.finance_manager.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.util.Date;

@RedisHash("Income")
public class Income {
    
    @Id
    private String id;
    private String data;
    private double valor;
    private String descricao;


    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getData() {
        return data;
    }
    public void setData(String data) {
        this.data = data;
    }
    public double getValor() {
        return valor;
    }
    public void setValor(double valor) {
        this.valor = valor;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }


}
