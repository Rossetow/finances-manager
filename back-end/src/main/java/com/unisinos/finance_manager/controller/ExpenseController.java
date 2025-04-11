package com.unisinos.finance_manager.controller;

import com.unisinos.finance_manager.entity.Expense;
import com.unisinos.finance_manager.repository.ExpenseDao;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/expenses")
public class ExpenseController {
    private final ExpenseDao expenseRepository;

    public ExpenseController(ExpenseDao expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        return expenseRepository.save(expense);
    }

    @GetMapping("/{id}")
    public Optional<Expense> getExpense(@PathVariable String id) {
        return expenseRepository.findById(id);
    }
    @GetMapping
    public List<Expense> getAllExpenses() {
        return (List<Expense>) expenseRepository.findAll();
    }

    @PutMapping("/{id}")
    public Expense updateExpense(@PathVariable String id, @RequestBody Expense expenseDetails) {
        Expense expense = expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Gasto não encontrado"));
        expense.setId(expenseDetails.getId());
        expense.setCategoria(expenseDetails.getCategoria());
        expense.setData(expenseDetails.getData());
        expense.setValor(expenseDetails.getValor());
        expense.setTitulo(expenseDetails.getTitulo());
        expense.setDescricao(expenseDetails.getDescricao());

        return expenseRepository.save(expense);
    }

    @DeleteMapping("/{id}")
    public void deleteExpense(@PathVariable String id) {
        expenseRepository.deleteById(id);
    }
}