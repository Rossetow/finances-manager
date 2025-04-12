package com.unisinos.finance_manager.controller;

import com.unisinos.finance_manager.entity.Expense;
import com.unisinos.finance_manager.entity.Income;
import com.unisinos.finance_manager.repository.ExpenseDao;
import com.unisinos.finance_manager.repository.IncomeDao;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/incomes")
public class IncomeController {
    private final IncomeDao incomeRepository;

    public IncomeController(IncomeDao incomeRepository) {
        this.incomeRepository = incomeRepository;
    }

    @PostMapping
    public Income addIncome(@RequestBody Income income) {
        return incomeRepository.save(income);
    }

    @GetMapping("/{id}")
    public Optional<Income> getIncome(@PathVariable String id) {
        return incomeRepository.findById(id);
    }
    @GetMapping
    public List<Income> getAllIncomes() {
        return (List<Income>) incomeRepository.findAll();
    }

    @PutMapping("/{id}")
    public Income updateExpense(@PathVariable String id, @RequestBody Expense expenseDetails) {
        Income income = incomeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Receita não encontrada"));
        income.setId(expenseDetails.getId());
        income.setData(expenseDetails.getData());
        income.setValor(expenseDetails.getValor());
        income.setDescricao(expenseDetails.getDescricao());

        return incomeRepository.save(income);
    }

    @DeleteMapping("/{id}")
    public void deleteIncome(@PathVariable String id) {
        incomeRepository.deleteById(id);
    }
}